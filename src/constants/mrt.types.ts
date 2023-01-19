type RouteType = "route1" | "route2" | "route3" | "route4";

export type StationType = {
  name: string;
  crossRoute: Array<RouteType>;
};

export type RoutesType = {
  route1: Array<StationType>;
  route2: Array<StationType>;
  route3: Array<StationType>;
  route4: Array<StationType>;
};

export type CrossPointType = {
  station: StationType;
  route: Array<StationType>;
  startIndex: number;
  endIndex: number;
};
