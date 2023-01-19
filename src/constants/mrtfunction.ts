import _ from "lodash";
import { CrossPointType, RoutesType, StationType } from "./mrt.types";
import { allRoutes, allStation } from "./mrtmap";

function formPartialPath(
  route: Array<StationType>,
  startIndex: number,
  endIndex: number
): Array<StationType> {
  let _route: Array<StationType> = [];

  if (startIndex <= endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      _route.push(route[i]);
    }
  } else {
    for (let i = startIndex; i >= endIndex; i--) {
      _route.push(route[i]);
    }
  }

  return _route;
}

function findPath(
  startPoint: StationType,
  endPoint: StationType,
  exludeRoute?: Array<string>
): Array<Array<StationType>> {
  let possibleRoute: Array<Array<StationType>> = [];
  let _exludeRoute: Array<string> = exludeRoute || [];

  let _routes: RoutesType = allRoutes;
  let crossPoint: Array<CrossPointType> = [];

  for (var _rt of startPoint.crossRoute) {
    let rt = _rt;
    let sstni = _.findIndex(_routes[rt], (o) => o.name === startPoint.name);
    _.map(_routes[rt], (stn, stni) => {
      if (stn.name === endPoint.name) {
        possibleRoute.push(formPartialPath(_routes[rt], sstni, stni));
      } else if (stn.crossRoute.length > 1 && !_exludeRoute.includes(rt)) {
        crossPoint.push({
          station: stn,
          route: _routes[rt],
          startIndex: sstni,
          endIndex: stni,
        });
      }
    });

    _exludeRoute.push(rt);
  }

  for (var _cp of crossPoint) {
    let cp = _cp;
    let defaultCrossRoute = formPartialPath(
      cp.route,
      cp.startIndex,
      cp.endIndex
    );
    let crossPossibleRoute: Array<Array<StationType>> = findPath(
      cp.station,
      endPoint,
      _exludeRoute
    );
    for (var cpr of crossPossibleRoute) {
      possibleRoute.push(
        defaultCrossRoute.concat(
          _.filter(cpr, (o) => o.name !== cp.station.name)
        )
      );
    }
  }

  return possibleRoute;
}

export function findRoute(startPoint: string, endPoint: string): Array<string> {
  let stnStart = _.find(allStation, (o) => o.name === startPoint);
  let stnEnd = _.find(allStation, (o) => o.name === endPoint);

  let routes: Array<Array<StationType>> = [];
  if (stnStart !== undefined && stnEnd !== undefined) {
    routes = findPath(stnStart, stnEnd);
  }

  let shortestRoute: Array<StationType> =
    _.minBy(routes, (o) => o.length) || [];

  return _.map(shortestRoute, (o) => o.name);
}
