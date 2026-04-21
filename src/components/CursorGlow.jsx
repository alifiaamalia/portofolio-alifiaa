import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[999]"
      style={{
        transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <div className="w-[200px] h-[200px] bg-yellow-300/30 blur-3xl rounded-full animate-pulse" />
    </div>
  );
}