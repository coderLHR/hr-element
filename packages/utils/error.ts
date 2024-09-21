import { isString } from "lodash-es";

class HrUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "HrUIError";
  }
}
function createHrUIError(scope: string, msg: string) {
  return new HrUIError(`[${scope}]:${msg}`);
}

export function throwError(scope: string, msg: string) {
  throw createHrUIError(scope, msg);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? createHrUIError(scope, msg!) : scope;
    console.warn(err);
  }
}
