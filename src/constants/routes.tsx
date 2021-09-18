export function MetroBaseUrl(url){return `https://api.wmata.com/${url}`}
export function BusBaseUrl({url}){return MetroBaseUrl(`Bus.svc/json/${url}`)}
export function RailBaseUrl({url}){return MetroBaseUrl(`Rail.svc/json/${url}`)}
export function BusPredictionUrl({stopId}){return MetroBaseUrl(`NextBusService.svc/json/jPredictions?StopId=${stopId}`)}
