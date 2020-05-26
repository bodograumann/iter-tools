/**
 * @generated-from ./$round-robin.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

// prettier-ignore
declare function asyncRoundRobin<T>(
  ...sources: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;

declare function asyncRoundRobin<T>(
  step: number,
  ...sources: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;

declare function asyncRoundRobin<T>(
  start: number,
  step: number,
  ...sources: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;

declare function asyncRoundRobin<T>(
  options: { start?: number; step?: number },
  ...sources: Array<AsyncSourceIterable<T>>
): AsyncResultIterable<T>;

declare function asyncRoundRobin(
  step: number,
): <T>(...sources: Array<AsyncSourceIterable<T>>) => AsyncResultIterable<T>;

declare function asyncRoundRobin(
  start: number,
  step: number,
): <T>(...sources: Array<AsyncSourceIterable<T>>) => AsyncResultIterable<T>;

declare function asyncRoundRobin(options: {
  start?: number;
  step?: number;
}): <T>(...sources: Array<AsyncSourceIterable<T>>) => AsyncResultIterable<T>;

export default asyncRoundRobin;
