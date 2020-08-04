type BoolAsStringFormatter<T = string> = (boolAsString: string, forTruthy: T, forFalthy: T) => T;

export const boolAsStringFormatter: BoolAsStringFormatter = (boolAsString, forTruthy, forFalthy) =>
  Boolean(boolAsString) ? forTruthy : forFalthy;
