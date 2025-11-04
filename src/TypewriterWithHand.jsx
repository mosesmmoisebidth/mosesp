// TypewriterWithHand.jsx
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function TypewriterWithHand({ lines, speed = 70 }) {
  const wrapperRef = useRef(null);
  const lastCharRef = useRef(null);

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [typing, setTyping] = useState("");
  const [finished, setFinished] = useState(false);

  const inView = useInView(wrapperRef, { once: true });

  // Hand position relative to wrapper
  const [handPos, setHandPos] = useState({ x: 0, y: 0 });

  // Typewriter logic (runs once when in view)
  useEffect(() => {
    if (!inView || finished) return;

    const line = lines[currentLine];
    let idx = 0;

    const interval = setInterval(() => {
      setTyping((prev) => prev + line[idx]);
      idx++;

      if (idx >= line.length) {
        clearInterval(interval);
        setDisplayedLines((prev) => [...prev, line]);
        setTyping("");

        if (currentLine < lines.length - 1) {
          setTimeout(() => setCurrentLine((p) => p + 1), 600);
        } else {
          setFinished(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [inView, currentLine, lines, speed, finished]);

  // Reposition hand to the last typed character (relative to wrapper)
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    // If typing, follow the last typed char; otherwise place at end of last finished line
    const targetEl = lastCharRef.current;
    if (targetEl) {
      const r = targetEl.getBoundingClientRect();
      setHandPos({
        x: r.right - wrapperRect.left,
        y: r.top - wrapperRect.top,
      });
    } else if (!typing && displayedLines.length > 0) {
      // When a line finishes we still want the hand to rest at the last char position
      // We approximate by placing it at the end of that line's container
      // (kept minimal to avoid extra DOM; fine because hand disappears once finished)
      setHandPos((pos) => pos);
    } else {
      setHandPos({ x: 0, y: 0 });
    }
  }, [typing, displayedLines.length]);

  // Recalculate on resize (responsive wrap can shift positions)
  useEffect(() => {
    const onResize = () => {
      // trigger layout effect by re-setting typing (noop) to force remeasure
      setTyping((t) => t);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Small baseline lift so nib sits on the text; tweak if needed
  const BASELINE_OFFSET_PX = -8;

  return (
    <div
      ref={wrapperRef}
      className="relative space-y-2 font-mono text-gray-300"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {/* Completed lines */}
      {displayedLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}

      {/* Current typing line */}
      {typing && !finished && (
        <div className="relative inline-block">
          {/* All but last char (no ref) */}
          <span>{typing.slice(0, Math.max(typing.length - 1, 0))}</span>
          {/* Last char we track */}
          <span ref={lastCharRef}>{typing.slice(-1)}</span>
        </div>
      )}

      {/* Hand image from /public (only visible while typing) */}
      {typing && !finished && (
        <motion.img
          src="/handwritter.svg"
          alt="writing hand"
          className="absolute w-6 h-6 pointer-events-none select-none"
          style={{
            left: handPos.x,
            top: handPos.y + BASELINE_OFFSET_PX,
            zIndex: 10,
          }}
          animate={{ y: [0, -1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.4 }}
        />
      )}
    </div>
  );
}
