export type RouteType = "EWL" | "EWLChangi" | "NSL" | "NEL" | "CCL" | "CCLDhoby" | "DTL" | "TEL" | "BP-CCK" | "BP-C" | "BP-C-R" | "SK-E" | "SK-E-R" | "SK-W" | "SK-W-R" | "PG-E" | "PG-E-R" | "PG-W" | "PG-W-R";

export type StationType = {
  name: string;
  description: string;
  crossRoute: Array<RouteType>;
};

export type RoutesType = {
  //MRT
  EWL: Array<StationType>;
  EWLChangi: Array<StationType>;
  NSL: Array<StationType>;
  NEL: Array<StationType>;
  CCL: Array<StationType>;
  CCLDhoby: Array<StationType>;
  DTL: Array<StationType>;
  TEL: Array<StationType>;
  //LRT
  ["BP-CCK"]: Array<StationType>;
  ["BP-C"]: Array<StationType>;
  ["BP-C-R"]: Array<StationType>;
  ["SK-E"]: Array<StationType>;
  ["SK-E-R"]: Array<StationType>;
  ["SK-W"]: Array<StationType>;
  ["SK-W-R"]: Array<StationType>;
  ["PG-E"]: Array<StationType>;
  ["PG-E-R"]: Array<StationType>;
  ["PG-W"]: Array<StationType>;
  ["PG-W-R"]: Array<StationType>;
};

export type CrossPointType = {
  station: StationType;
  route: Array<StationType>;
  routeName: string;
  startIndex: number;
  endIndex: number;
};
