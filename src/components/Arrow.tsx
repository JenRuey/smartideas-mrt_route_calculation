import "./Arrow.css";
import { StationTagCheck } from "./StationBox";

type ArrowType = {
  direction: "left" | "right" | "up" | "down";
  route: string;
};

function Arrow({ direction, route }: ArrowType) {
  let stninfo = StationTagCheck(route);
  let borderColor = stninfo.color;
  return (
    <div className="arrow" style={{ transform: direction === "right" ? "rotate(-90deg)" : direction === "left" ? "rotate(90deg)" : direction === "up" ? "rotate(180deg)" : "rotate(0deg)" }}>
      <span style={{ borderColor }}></span>
      <span style={{ borderColor }}></span>
      <span style={{ borderColor }}></span>
    </div>
  );
}

export default Arrow;
