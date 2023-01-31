import _ from "lodash";
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

  for (let _cp of crossPoint) {
    let cp = _cp;

    let shortestPossible: number = (_.minBy(possibleRoute, (o) => o.length) || Array(9999)).length;
    let defaultCrossRoute = formPartialPath(cp.route, cp.routeName, cp.startIndex, cp.endIndex);

    if (shortestPossible > defaultCrossRoute.length) {
      let crossPossibleRoute: Array<Array<StationResultType>> = findPath(cp.station, endPoint, _.cloneDeep(_exludeStation));
      for (let cpr of crossPossibleRoute) {
        possibleRoute.push(
          defaultCrossRoute.concat(
            //_.filter(cpr, (o) => o.name !== cp.station.name)
            cpr
          )
        );
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

export function findRoute(startPoint: string, endPoint: string): Array<StationResultType> {
  let routes: Array<Array<StationResultType>> = findRoutes(startPoint, endPoint);
  let shortestRoute: Array<StationResultType> = _.minBy(routes, (o) => o.length) || [];

  return shortestRoute; //_.map(shortestRoute, (o) => o.name);
}
