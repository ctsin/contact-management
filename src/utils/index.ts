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

export const propsStringify = (obj: object) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    return { ...acc, [key]: String(value) };
  }, {});

export const capitalize = (input: string = "") => {
  if (!input.length) {
    return input;
  }

  const lower = input.toLowerCase();
  const firstLetter = lower.slice(0, 1);

  return lower.replace(firstLetter, firstLetter.toUpperCase());
};

export const dateFormatter = (
  dateSource: string,
  locales = "en-GB",
  options: Intl.DateTimeFormatOptions = {}
) => {
  const date = new Date(dateSource);

  return new Intl.DateTimeFormat(locales, options).format(date);
};

export const withFilters = <T>(data: T[], filters: Partial<T>): T[] => {
  const filterHandler = (item: T) =>
    Object.entries(filters).reduce((acc, [key, value]) => {
      switch (key) {
        case "IsFavorite":
          return (acc = acc ? (item as any)[key] === value : false);

        case "Name":
          return (acc = acc
            ? (item as any)[key].toLowerCase().includes((value as string).toLowerCase())
            : false);

        default:
          return true;
      }
    }, true);

  return data.filter(filterHandler);
};
