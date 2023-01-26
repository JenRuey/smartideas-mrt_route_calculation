import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { StationType } from "../constants/mrt.types";

type StationBoxType = {
  item: StationType;
  ltr?: boolean;
  delaction?: () => void;
};

type StnInfoType = {
  name: string;
  color: "green" | "red" | "purple" | "orange" | "blue" | "saddlebrown" | "gray" | "black";
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
  margin-right: 4px;
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

const FloatIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;

function StationBox({ item, delaction, ltr = false }: StationBoxType) {
  return (
    <div className={"hover-ap-icon p-1 border m-1" + (ltr ? " flex-center" : "")} style={{ background: "white" }}>
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
      {delaction && (
        <FloatIcon className={"float-icon"}>
          <RxCrossCircled color={"red"} size={25} onClick={delaction} />
        </FloatIcon>
      )}
    </div>
  );
}

export function StationTagCheck(tag: string): StnInfoType {
  if (/^EW/.test(tag)) {
    return { name: tag, color: "green", fontColor: "white" };
  } else if (/^NS/.test(tag)) {
    return { name: tag, color: "red", fontColor: "white" };
  } else if (/^NE/.test(tag)) {
    return { name: tag, color: "purple", fontColor: "white" };
  } else if (/^CC/.test(tag)) {
    return { name: tag, color: "orange", fontColor: "white" };
  } else if (/^DT/.test(tag)) {
    return { name: tag, color: "blue", fontColor: "white" };
  } else if (/^TE/.test(tag)) {
    return { name: tag, color: "saddlebrown", fontColor: "white" };
  } else if (
    // lrtprefix name
    /^BP/.test(tag) ||
    /^SE/.test(tag) ||
    /^SW/.test(tag) ||
    /^PE/.test(tag) ||
    /^PW/.test(tag) ||
    // lrtrouteprefix name
    /^STC/.test(tag) ||
    /^PTC/.test(tag) ||
    /^SK/.test(tag) ||
    /^PG/.test(tag)
  ) {
    return { name: tag, color: "gray", fontColor: "white" };
  }

  return { name: tag, color: "black", fontColor: "white" };
}

function setStationTag(name: string): Array<StnInfoType> {
  let result: Array<StnInfoType> = [];
  for (let tag of name.split("/")) {
    result.push(StationTagCheck(tag));
  }

  return result;
}

export default StationBox;
