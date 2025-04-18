import { useRef } from "react";

export default function GlowCard({ card, children, index }) {
  const cardRef = useRef([]);
  const handelMouseMove = (index) => (e) => {
    const card = cardRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={handelMouseMove(index)}
      className="card card-border rounded-xl p-10 timeline-card mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="./images/star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
}
