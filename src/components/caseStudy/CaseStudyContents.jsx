import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "../../css/caseStudy.css";

/**
 * Floating "Contents" panel for long case studies.
 *
 * Props:
 *  groups  [{ label, items: [{ id, label }] }]
 *          label is optional (a group without one has no heading).
 *          One group without a label gives a flat numbered list.
 *          Each id must match a section's id on the page.
 *
 * Behaviour:
 *  - Hidden over the hero, appears once the first listed section is reached.
 *  - Highlights the section being read.
 *  - Only the chapter being read is expanded; other chapters show their
 *    heading, which jumps to that chapter.
 *  - Can be minimised to a pill. Starts open only where it fits beside the
 *    content (1680px and up); elsewhere it starts as a pill.
 *  - Rendered into document.body: the page wrapper animates with a transform,
 *    which would otherwise pin a position: fixed element to the page, not the screen.
 */
function CaseStudyContents({ groups = [] }) {
  const allItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const [activeId, setActiveId] = useState(null);
  const [open, setOpen] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia("(min-width: 1680px)").matches
  );

  // Track the section being read: the last section whose top has passed
  // a line 35% down the viewport.
  useEffect(() => {
    const sections = allItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = null;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [allItems]);

  // Escape minimises the panel.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeGroupIndex = Math.max(
    0,
    groups.findIndex((g) => g.items.some((item) => item.id === activeId))
  );
  const activeItem = allItems.find((item) => item.id === activeId);
  const visible = Boolean(activeId);

  const goTo = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    if (!window.matchMedia("(min-width: 1680px)").matches) setOpen(false);
  };

  return createPortal(
    <nav
      className={`cs-toc${visible ? " is-visible" : ""}${open ? " is-open" : ""}`}
      aria-label="Contents"
      aria-hidden={!visible}
    >
      {open ? (
        <div className="cs-toc-panel" id="cs-toc-panel">
          <div className="cs-toc-head">
            <span className="cs-toc-title">Contents</span>
            <button
              type="button"
              className="cs-toc-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Minimise contents"
              aria-expanded="true"
              aria-controls="cs-toc-panel"
              tabIndex={visible ? 0 : -1}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="cs-toc-scroll">
            {groups.map((group, gi) => {
              const expanded = gi === activeGroupIndex || !group.label;
              return (
                <div className="cs-toc-group" key={group.label || gi}>
                  {group.label && (
                    <a
                      href={`#${group.items[0].id}`}
                      className={`cs-toc-group-label${gi === activeGroupIndex ? " is-current" : ""}`}
                      onClick={(e) => goTo(e, group.items[0].id)}
                      tabIndex={visible ? 0 : -1}
                    >
                      {group.label}
                    </a>
                  )}
                  {expanded && (
                    <ol className="cs-toc-list">
                      {group.items.map((item, i) => {
                        const isActive = item.id === activeId;
                        return (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className={`cs-toc-link${isActive ? " is-active" : ""}`}
                              aria-current={isActive ? "location" : undefined}
                              onClick={(e) => goTo(e, item.id)}
                              tabIndex={visible ? 0 : -1}
                            >
                              {(group.label || groups.length === 1) && (
                                <span className="cs-toc-num" aria-hidden="true">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                              )}
                              <span className="cs-toc-label">{item.label}</span>
                              {isActive && <span className="cs-toc-dot" aria-hidden="true" />}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="cs-toc-pill"
          onClick={() => setOpen(true)}
          aria-expanded="false"
          tabIndex={visible ? 0 : -1}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M2 3.5h10M2 7h10M2 10.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="cs-toc-pill-label">Contents</span>
          {activeItem && <span className="cs-toc-pill-current">{activeItem.label}</span>}
        </button>
      )}
    </nav>,
    document.body
  );
}

export default CaseStudyContents;
