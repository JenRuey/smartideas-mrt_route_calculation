import "./Arrow.css";

type ArrowType = {
  direction: "left" | "right";
};

function Arrow({ direction }: ArrowType) {
  return (
    <div className="arrow" style={{ transform: direction === "right" ? "rotate(-90deg)" : "rotate(90deg)" }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Arrow;
