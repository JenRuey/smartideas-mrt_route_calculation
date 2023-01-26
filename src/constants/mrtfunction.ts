import _ from "lodash";
import { CrossPointType, RoutesType, StationResultType, StationType } from "./mrt.types";
import { allRoutes, allStation } from "./mrtmap";

function formPartialPath(route: Array<StationType>, routename: string, startIndex: number, endIndex: number): Array<StationType> {
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

function findPath(startPoint: StationType, endPoint: StationType, excludeStation?: Array<string>): Array<Array<StationType>> {
  let possibleRoute: Array<Array<StationType>> = [];
  let _exludeStation: Array<string> = excludeStation || [];

  let _routes: RoutesType = allRoutes;
  let crossPoint: Array<CrossPointType> = [];

  for (var _rt of startPoint.crossRoute) {
    let rt = _rt;
    let sstni = _.findIndex(_routes[rt], (o) => o.name === startPoint.name);
    _.map(_routes[rt], (stn, stni) => {
      if (stn.name === endPoint.name) {
        possibleRoute.push(formPartialPath(_routes[rt], rt, sstni, stni));
      } else if (stn.crossRoute.length > 1 && !_exludeStation.includes(stn.name)) {
        _exludeStation.push(stn.name);
        crossPoint.push({ station: stn, route: _routes[rt], routeName: rt, startIndex: sstni, endIndex: stni });
      }
    });
  }

  for (var _cp of crossPoint) {
    let cp = _cp;

    let shortestPossible: number = (_.minBy(possibleRoute, (o) => o.length) || Array(9999)).length;
    let defaultCrossRoute = formPartialPath(cp.route, cp.routeName, cp.startIndex, cp.endIndex);

    if (shortestPossible > defaultCrossRoute.length) {
      let crossPossibleRoute: Array<Array<StationType>> = findPath(cp.station, endPoint, _.cloneDeep(_exludeStation));
      for (var cpr of crossPossibleRoute) {
        possibleRoute.push(defaultCrossRoute.concat(_.filter(cpr, (o) => o.name !== cp.station.name)));
      }
    }
  }

  return possibleRoute;
}

export function findRoutes(startPoint: string, endPoint: string): Array<Array<StationType>> {
  let stnStart = _.find(allStation, (o) => o.name === startPoint);
  let stnEnd = _.find(allStation, (o) => o.name === endPoint);

  let routes: Array<Array<StationType>> = [];
  if (stnStart !== undefined && stnEnd !== undefined) {
    routes = findPath(stnStart, stnEnd);
  }

  return routes;
}

export function findRoute(startPoint: string, endPoint: string): Array<StationType> {
  let routes: Array<Array<StationType>> = findRoutes(startPoint, endPoint);
  let shortestRoute: Array<StationType> = _.minBy(routes, (o) => o.length) || [];

  return shortestRoute; //_.map(shortestRoute, (o) => o.name);
}
