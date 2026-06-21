import { useEffect, useState } from "react";

function Spotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const update = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", update);

    return () =>
      window.removeEventListener(
        "mousemove",
        update
      );
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          500px at ${position.x}px ${position.y}px,
          rgba(139,92,246,.12),
          transparent 80%
        )`
      }}
    />
  );
}

export default Spotlight;