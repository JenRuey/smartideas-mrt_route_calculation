import { RoutesType, StationType } from "./mrt.types";

const Station1: StationType = { name: "1", crossRoute: ["route1"] };
const Station2: StationType = { name: "2", crossRoute: ["route1", "route2"] };
const Station3: StationType = { name: "3", crossRoute: ["route1"] };
const Station4: StationType = { name: "4", crossRoute: ["route1", "route4"] };
const Station5: StationType = { name: "5", crossRoute: ["route1"] };
const Station6: StationType = { name: "6", crossRoute: ["route1"] };
const Station7: StationType = { name: "7", crossRoute: ["route2"] };
const Station8: StationType = { name: "8", crossRoute: ["route2", "route3"] };
const Station9: StationType = { name: "9", crossRoute: ["route2"] };
const Station10: StationType = { name: "10", crossRoute: ["route2"] };
const Station11: StationType = { name: "11", crossRoute: ["route3"] };
const Station12: StationType = { name: "12", crossRoute: ["route3"] };
const Station13: StationType = { name: "13", crossRoute: ["route3", "route4"] };
const Station14: StationType = { name: "14", crossRoute: ["route3"] };
const Station15: StationType = { name: "15", crossRoute: ["route4"] };
const Station16: StationType = { name: "16", crossRoute: ["route4"] };
const Station17: StationType = { name: "17", crossRoute: ["route4"] };
const Station18: StationType = { name: "18", crossRoute: ["route4"] };

export const allStation: Array<StationType> = [
  Station1,
  Station2,
  Station3,
  Station4,
  Station5,
  Station6,
  Station7,
  Station8,
  Station9,
  Station10,
  Station11,
  Station12,
  Station13,
  Station14,
  Station15,
  Station16,
  Station17,
  Station18,
];

export const allRoutes: RoutesType = {
  route1: [Station1, Station2, Station3, Station4, Station5, Station6],
  route2: [Station7, Station8, Station9, Station2, Station10],
  route3: [Station11, Station8, Station12, Station13, Station14],
  route4: [Station15, Station13, Station16, Station17, Station4, Station18],
};
