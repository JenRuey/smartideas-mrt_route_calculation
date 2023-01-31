import _ from "lodash";
import { formatStationLine } from "../components/StationLine";
import { CrossPointType, RoutesType, StationResultType, StationType } from "./mrt.types";
import { allRoutes, allStation } from "./mrtmap";

function formPartialPath(route: Array<StationType>, routename: string, startIndex: number, endIndex: number): Array<StationResultType> {
  let _route: Array<StationResultType> = [];

  if (startIndex <= endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      _route.push({ ...route[i], usedRoute: routename });
    }
  } else {
    for (let i = startIndex; i >= endIndex; i--) {
      _route.push({ ...route[i], usedRoute: routename });
    }
  }

  return _route;
}

function findPath(startPoint: StationType, endPoint: StationType, excludeStation?: Array<string>): Array<Array<StationResultType>> {
  let possibleRoute: Array<Array<StationResultType>> = [];
  let _exludeStation: Array<string> = excludeStation || [];

  let _routes: RoutesType = allRoutes;
  let crossPoint: Array<CrossPointType> = [];

  for (let _rt of startPoint.crossRoute) {
    let rt = _rt;
    let sstni = _.findIndex(_routes[rt.route], (o) => o.name === startPoint.name);
    _.map(_routes[rt.route], (stn, stni) => {
      if (stn.name === endPoint.name) {
        possibleRoute.push(formPartialPath(_routes[rt.route], rt.route, sstni, stni));
      } else if (stn.crossRoute.length > 1 && !_exludeStation.includes(stn.name)) {
        _exludeStation.push(stn.name);
        crossPoint.push({ station: stn, route: _routes[rt.route], routeName: rt.route, startIndex: sstni, endIndex: stni });
      }
    });
  }

  for (let _cp of crossPoint) {
    let cp = _cp;

    let shortestPossible: number = (_.minBy(possibleRoute, (o) => o.length) || Array(9999)).length;
    let defaultCrossRoute = formPartialPath(cp.route, cp.routeName, cp.startIndex, cp.endIndex);

    if (shortestPossible > defaultCrossRoute.length) {
      let crossPossibleRoute: Array<Array<StationResultType>> = findPath(cp.station, endPoint, _.cloneDeep(_exludeStation));
      for (let cpr of crossPossibleRoute) {
        let transferstn: StationResultType = { ...cpr[0], transferStn: true };
        possibleRoute.push(defaultCrossRoute.concat([transferstn]).concat(_.drop(cpr, 1)));
      }
    }
  }

  return possibleRoute;
}

export function findRoutes(startPoint: string, endPoint: string): Array<Array<StationResultType>> {
  let stnStart = _.find(allStation, (o) => o.name === startPoint);
  let stnEnd = _.find(allStation, (o) => o.name === endPoint);

  let routes: Array<Array<StationResultType>> = [];
  if (stnStart !== undefined && stnEnd !== undefined) {
    routes = findPath(stnStart, stnEnd);
  }

  return routes;
}

export function findRoute(startPoint: string, endPoint: string, shortestTransfer: boolean): Array<StationResultType> {
  let routes: Array<Array<StationResultType>> = findRoutes(startPoint, endPoint);

  if (!shortestTransfer) {
    //shortestRoute
    let shortestRoute: Array<StationResultType> = _.minBy(routes, (o) => _.filter(o, (o1) => !o1.transferStn).length) || [];
    return shortestRoute;
  } else {
    //shortestTransfer
    let minTransfer: number = 999;
    let trfcategory: Array<Array<Array<StationResultType>>> = Array(999).fill([]);
    for (let route of routes) {
      let trf = formatStationLine(route).length;
      if (minTransfer > trf) minTransfer = trf;
      trfcategory[trf] = [...trfcategory[trf], route];
    }
    let shortestTransfer: Array<StationResultType> = _.minBy(trfcategory[minTransfer], (o) => _.filter(o, (o1) => !o1.transferStn).length) || [];
    return shortestTransfer;
  }

  //availableTransfer
  // let availableTransfer: Array<Array<StationResultType>> = [];
  // for (let tc of _.filter(trfcategory, (o) => o.length > 0)) {
  //   let shortTransfer: Array<StationResultType> = _.minBy(tc, (o) => _.filter(o, (o1) => !o1.transferStn).length) || [];
  //   availableTransfer.push(shortTransfer);
  // }
}
