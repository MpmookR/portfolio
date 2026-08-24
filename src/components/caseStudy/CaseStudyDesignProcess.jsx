import "../../css/caseStudy.css";
import "../../css/caseStudyDesignProcess.css";

/**
 * Reusable "Design Process" section for case study pages — shows how a
 * project moved from research into validated UI decisions, ahead of the
 * engineering build. Renders as two adjacent sections: a white intro
 * (eyebrow, title, intro paragraph, skip link) followed by the content
 * blocks on the page's default background. Every content block is optional
 * so a page can include only what it has.
 *
 * Props:
 *  eyebrow          — small label above the title (default "Design Process")
 *  title            — section heading (required)
 *  intro            — paragraph under the heading
 *  skipTo           — { id, label } — renders a link at the top that jumps
 *                      to #id, for readers who want to skip straight to the build
 *  forwardTo        — { id, label } — renders a link at the bottom that jumps
 *                      to #id, pointing design-focused readers to more design
 *                      content later in the page (e.g. a post-launch iteration)
 *  onImageClick     — (src, alt) => void — called when a zoomable image is
 *                      clicked; wire this to the page's Lightbox state
 *  flowSection      — { title, intro, items: [{ label, image: { src, alt } }] }
 *                      IA / screen-graph diagrams
 *  wireframeSection — { title, intro, items: [{ tag, description, images: [{ src, alt }] }] }
 *                      wireframe blocks, each carrying a design-decision rationale
 *  statsSection     — { title, intro, stats: [{ value, label }], calloutTitle, calloutBody }
 *                      usability-testing results + a "what changed" callout
 */
function CaseStudyDesignProcess({
  eyebrow = "Design Process",
  title,
  intro,
  skipTo,
  forwardTo,
  onImageClick,
  flowSection,
  wireframeSection,
  statsSection,
}) {
  const handleClick = (image) =>
    onImageClick ? () => onImageClick(image.src, image.alt) : undefined;

  return (
    <>
      <section className="cs-dp-section cs-dp-section--intro cs-dp-section--alt">
        <div className="cs-dp-inner">
          <p className="cs-dp-eyebrow">{eyebrow}</p>
          <h2 className="cs-dp-title">{title}</h2>
          {intro && <p className="cs-dp-intro">{intro}</p>}

          {skipTo && (
            <div className="cs-dp-skip">
              <a href={`#${skipTo.id}`} className="cs-dp-skip-link">
                Here for the engineering?
                <br />
                Skip ahead to <strong>{skipTo.label} →</strong>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="cs-dp-section cs-dp-section--content">
        <div className="cs-dp-inner">
          {flowSection && (
            <div className="cs-dp-block">
              <h3 className="cs-dp-block-title">{flowSection.title}</h3>
              {flowSection.intro && (
                <p className="cs-dp-block-intro">{flowSection.intro}</p>
              )}

              {flowSection.items.map((item, i) => (
                <div className="cs-dp-flow-item" key={i}>
                  <div className="cs-dp-flow-label">{item.label}</div>
                  <div
                    className="cs-zoomable"
                    onClick={handleClick(item.image)}
                  >
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="cs-dp-flow-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {wireframeSection && (
            <div className="cs-dp-block">
              <h3 className="cs-dp-block-title">{wireframeSection.title}</h3>
              {wireframeSection.intro && (
                <p className="cs-dp-block-intro">{wireframeSection.intro}</p>
              )}

              {wireframeSection.items.map((item, i) => (
                <div className="cs-dp-wireframe" key={i}>
                  <div className="cs-dp-wireframe-text">
                    <span className="cs-dp-wireframe-tag">{item.tag}</span>
                    <p>{item.description}</p>
                  </div>
                  {item.images.map((image, j) => (
                    <div
                      className="cs-zoomable"
                      onClick={handleClick(image)}
                      key={j}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="cs-dp-wireframe-img"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {statsSection && (
            <div className="cs-dp-block">
              <h3 className="cs-dp-block-title">{statsSection.title}</h3>
              {statsSection.intro && (
                <p className="cs-dp-block-intro">{statsSection.intro}</p>
              )}

              <div className="cs-dp-stat-grid">
                {statsSection.stats.map((stat, i) => (
                  <div className="cs-dp-stat-tile" key={i}>
                    <span className="cs-dp-stat-num">{stat.value}</span>
                    <span className="cs-dp-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {statsSection.calloutBody && (
                <div className="cs-dp-callout">
                  {statsSection.calloutTitle && (
                    <strong>{statsSection.calloutTitle} </strong>
                  )}
                  {statsSection.calloutBody}
                </div>
              )}
            </div>
          )}

          {forwardTo && (
            <div className="cs-dp-forward">
              <a href={`#${forwardTo.id}`} className="cs-dp-skip-link">
                Curious what happened after Usability Testing?
                <br />
                Jump to <strong>{forwardTo.label} →</strong>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default CaseStudyDesignProcess;
