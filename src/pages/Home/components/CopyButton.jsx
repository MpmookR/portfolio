import { useEffect, useState } from "react";

// Copies `text` to the clipboard and says so, both on the button and to
// screen readers (the live region announces "Copied").
// `label` is the full name for assistive tech, e.g. "Copy email address";
// it starts with the visible word "Copy" so voice control users can say it.
export default function CopyButton({ text, label = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard blocked (old browser or no permission): the address is
      // still on screen and in the link, so nothing else to do.
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={copy} aria-label={label}>
        {copied ? "Copied ✓" : "Copy"}
      </button>
      <span className="np-visually-hidden" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
}
