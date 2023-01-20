import styled from "styled-components";
import { StationType } from "../constants/mrt.types";

type StationBoxType = {
  item: StationType;
};

type StnInfoType = {
  name: string;
  color: "green" | "red" | "purple" | "orange" | "blue" | "brown" | "gray";
  fontColor: "white" | "black";
};

// type EWStnInfoType = {
//   name: `EW${string}`;
//   color: "green";
//   fontColor: "white";
// };
// type NSStnInfoType = {
//   name: `${"NS"}${string}`;
//   color: "red";
//   fontColor: "white";
// };
// type NEStnInfoType = {
//   name: `${"NE"}${string}`;
//   color: "purple";
//   fontColor: "white";
// };
// type CCStnInfoType = {
//   name: `${"CC"}${string}`;
//   color: "orange";
//   fontColor: "white";
// };
// type DTStnInfoType = {
//   name: `${"DT"}${string}`;
//   color: "blue";
//   fontColor: "white";
// };
// type TEStnInfoType = {
//   name: `${"TE"}${string}`;
//   color: "brown";
//   fontColor: "white";
// };
// type LRTStnInfoType = {
//   name: `${"BP"}${string}` | `${"SE"}${string}` | `${"SW"}${string}` | `${"PE"}${string}` | `${"PW"}${string}`;
//   color: "gray";
//   fontColor: "white";
// };

// type StnInfoType = EWStnInfoType | NSStnInfoType | NEStnInfoType | CCStnInfoType | DTStnInfoType | TEStnInfoType | LRTStnInfoType;

const StationTag = styled.div`
  display: flex;
  align-items: center;
  > div {
    padding: 4px 8px;
  }
  > div:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  > div:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

function StationBox({ item }: StationBoxType) {
  return (
    <div className="p-1 border m-1" style={{ background: "white" }}>
      <StationTag>
        {setStationTag(item.name).map((stn, index) => {
          return (
            <div key={"cr-" + index} style={{ background: stn.color, color: stn.fontColor }}>
              {stn.name}
            </div>
          );
        })}
      </StationTag>
      <div>{item.description}</div>
    </div>
  );
}

function setStationTag(name: string): Array<StnInfoType> {
  let result: Array<StnInfoType> = [];
  for (var tag of name.split("/")) {
    if (/^EW/.test(tag)) {
      result.push({ name: tag, color: "green", fontColor: "white" });
    } else if (/^NS/.test(tag)) {
      result.push({ name: tag, color: "red", fontColor: "white" });
    } else if (/^NE/.test(tag)) {
      result.push({ name: tag, color: "purple", fontColor: "white" });
    } else if (/^CC/.test(tag)) {
      result.push({ name: tag, color: "orange", fontColor: "white" });
    } else if (/^DT/.test(tag)) {
      result.push({ name: tag, color: "blue", fontColor: "white" });
    } else if (/^TE/.test(tag)) {
      result.push({ name: tag, color: "brown", fontColor: "white" });
    } else if (/^BP/.test(tag) || /^SE/.test(tag) || /^SW/.test(tag) || /^PE/.test(tag) || /^PW/.test(tag)) {
      result.push({ name: tag, color: "gray", fontColor: "white" });
    }
  }

  return result;
}

export default StationBox;
