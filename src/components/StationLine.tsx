import _ from "lodash";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaWalking } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { StationResultType, StationType } from "../constants/mrt.types";
import { ordinal_suffix_of } from "../utils/number-utils";
import Arrow from "./Arrow";
import StationBox, { StationTagCheck } from "./StationBox";
import { ShadowBox } from "./styled/ShadowBox";
import { HoverColor } from "./styled/Wrapper";

type StationLineType = {
  line: Array<StationResultType>;
  stops: Array<StationType>;
};

type StationResultWithStopsType = StationResultType & {
  stopIndex: number;
};

function formatStationLine(line: Array<StationResultType>, stops: Array<StationType>): Array<Array<StationResultWithStopsType>> {
  let result: Array<Array<StationResultWithStopsType>> = [];

  //partialroute
  let partialRoute: Array<StationResultWithStopsType> = [];
  let partialRouteName: string = "";
  //stops
  let nextStop = stops[0] || null;
  let nextIndex = 0;
  for (let l of line) {
    let currentroute = l.usedRoute || "";
    if (currentroute !== partialRouteName) {
      if (partialRoute.length > 0) result.push(partialRoute);
      partialRoute = [];
      partialRouteName = currentroute;
    }
    // handle stops
    if (nextStop && nextStop.name === l.name) {
      partialRoute.push({ ...l, stopIndex: nextIndex + 1 });
      nextIndex++;
      nextStop = stops[nextIndex] || null;
    } else {
      partialRoute.push({ ...l, stopIndex: 0 });
    }
  }
  if (partialRoute.length > 0) result.push(partialRoute);

  return result;
}

function StationLine({ line, stops }: StationLineType) {
  const [formatted, setformatted] = useState<Array<Array<StationResultWithStopsType>>>([]);
  const [collapse, handlecollapse] = useState<Array<boolean>>([]);

  useEffect(() => {
    let _formatted = formatStationLine(line, stops);
    setformatted(_formatted);
  }, [line, stops]);

  useEffect(() => {
    handlecollapse(Array(formatted.length).fill(false));
  }, [formatted]);

  let totalStn = _.sumBy(formatted, (o) => o.length);
  return (
    <div id={"result-box"} className={"d-flex flex-column mt-3"}>
      {formatted.length > 0 && (
        <div className="w-100 flex-center my-3">
          {formatted.map((format, findex) => {
            let route = StationTagCheck(format[0]?.usedRoute || "");
            return <div key={"route-smmy-" + findex} style={{ height: 10, background: route.color, width: (format.length / totalStn) * 100 + "%" }}></div>;
          })}
        </div>
      )}
      {formatted.map((format, findex) => {
        let route = StationTagCheck(format[0]?.usedRoute || "");
        return (
          <div key={"formatpath-" + findex}>
            <ShadowBox className="d-flex align-items-start flex-column mb-3">
              <StationBox item={format[0]} ltr={true} />
              {findex === 0 && (
                <div className="ms-3">
                  <strong>{"Here is your origin!"}</strong>
                </div>
              )}
              <div className="d-flex flex-column ms-3">
                <GoPrimitiveDot size={18} color={route.color} />
                {_.filter(format, (o) => o.stopIndex > 0).map((s, sidx) => {
                  return <small key={"stop-dis-" + sidx}>{"Your " + ordinal_suffix_of(s.stopIndex) + " stop"}</small>;
                })}
                <GoPrimitiveDot size={18} color={route.color} />
              </div>
              <StationBox item={format[format.length - 1]} ltr={true} />
              {findex === formatted.length - 1 && (
                <div className="ms-3">
                  <strong>{"Here is your destination!"}</strong>
                </div>
              )}
              <HoverColor
                className="flex-center w-100"
                onClick={() => {
                  let _new = [...collapse];
                  _new[findex] = !collapse[findex];
                  handlecollapse(_new);
                }}
              >
                {collapse[findex] ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
                <div className="mx-2">{"Ride " + format.length + " stops."}</div>
              </HoverColor>
            </ShadowBox>
            {collapse[findex] &&
              format.map((item: StationResultWithStopsType, index) => {
                let nextroute = format[index + 1]?.usedRoute || "";
                let currentroute = item?.usedRoute || "";
                let currentroutestninfo = StationTagCheck(currentroute);
                return (
                  <div key={"result-station-" + index} className="d-flex flex-column">
                    <div className="flex-center">
                      <GoPrimitiveDot size={35} color={currentroutestninfo.color} />
                      <div className="d-flex flex-column">
                        <StationBox item={item} ltr={true} />
                        {item.stopIndex > 0 && (
                          <div className="ms-3">
                            <strong>{"Here is your " + ordinal_suffix_of(item.stopIndex) + " stop!"}</strong>
                          </div>
                        )}
                      </div>
                    </div>
                    {index !== format.length - 1 && (
                      <div>
                        <div style={{ margin: "15px 0 15px 13.2px" }}>
                          <Arrow direction="down" route={nextroute} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            {findex !== formatted.length - 1 && (
              <div className="d-flex flex-column mt-4" style={{ marginLeft: 8 }}>
                <GoPrimitiveDot size={18} color={"lightgray"} />
                <GoPrimitiveDot size={18} color={"lightgray"} />
                <div className="flex-center" style={{ margin: "10px 0 10px -5px" }}>
                  <FaWalking size={25} />
                  <div className="mx-3">
                    <strong>Transfer</strong>
                  </div>
                </div>
                <GoPrimitiveDot size={18} color={"lightgray"} />
                <GoPrimitiveDot size={18} color={"lightgray"} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StationLine;
