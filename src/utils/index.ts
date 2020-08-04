export const boolAsStringFormatter = (
  boolAsString: string | number,
  forTruthy: string,
  forFalthy: string
) => {
  return Boolean(Number(boolAsString)) ? forTruthy : forFalthy;
};

export const boolToStringFormatter = <T = string>(bool: boolean, forTruthy: T, forFalthy: T): T =>
  bool ? forTruthy : forFalthy;

// https://www.30secondsofcode.org/js/s/object-to-query-string
export const objectToQueryString = <T>(queryParameters: T): string => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? "?" : "&";
        queryString += typeof val === "string" ? `${symbol}${key}=${val}` : "";
        return queryString;
      }, "")
    : "";
};

//www.30secondsofcode.org/js/s/get-url-parameters
export const getURLParameters = (url: string) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    // eslint-disable-next-line no-sequences
    (a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a),
    {} as any
  );
};

export const withFilters = <T>(data: T[], filters: Partial<T>): T[] => {
  const filterHandler = (item: T) =>
    Object.entries(filters).reduce((acc, [key, value]) => {
      return (acc = acc ? (item as any)[key] === value : false);
    }, true);

  return data.filter(filterHandler);
};
