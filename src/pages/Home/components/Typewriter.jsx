import { useEffect, useState } from "react";

// Types each line in turn, holds, then starts again. The full text sits
// underneath (invisible) so the box never changes size, and screen readers
// get the plain list instead of the animation.
export default function Typewriter({ lines, speed = 55, hold = 2600 }) {
  const total = lines.reduce((sum, line) => sum + line.length, 0);
  const [count, setCount] = useState(0);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (reduced) return;
    const delay = count >= total ? hold : speed;
    const timer = setTimeout(() => setCount((c) => (c >= total ? 0 : c + 1)), delay);
    return () => clearTimeout(timer);
  }, [count, total, speed, hold, reduced]);

  const shown = reduced ? total : count;
  // How many characters of each line are typed, and which line holds the cursor.
  const starts = lines.map((_, i) => lines.slice(0, i).reduce((sum, line) => sum + line.length, 0));
  const typedPerLine = lines.map((line, i) => Math.max(0, Math.min(line.length, shown - starts[i])));
  const activeLine = reduced ? -1 : Math.max(0, typedPerLine.findIndex((typed, i) => typed < lines[i].length));
  const cursorLine = activeLine === -1 || typedPerLine.every((t, i) => t === lines[i].length) ? lines.length - 1 : activeLine;

  return (
    <>
      <ol className="np-visually-hidden">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>
      <ol className="np-type" aria-hidden="true">
        {lines.map((line, i) => {
          const typed = typedPerLine[i];
          const showCursor = !reduced && i === cursorLine;
          return (
            <li key={line}>
              <span className="np-type-num">{i + 1}</span>
              <span className="np-type-line">
                {line.slice(0, typed)}
                {showCursor && <span className="np-type-cursor" />}
                <span className="np-type-ghost">{line.slice(typed)}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
