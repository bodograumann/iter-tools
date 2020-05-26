/**
 * @generated-from ./$take-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncTakeSorted<T>(iterable: AsyncSourceIterable<T>): AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  n: number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  n: number,
  func: (a: T, b: T) => number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  func: (a: T, b: T) => number,
): (source: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  n: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  n: number,
  func: (a: T, b: T) => number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;

declare function asyncTakeSorted<T>(
  func: (a: T, b: T) => number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<T>;

export default asyncTakeSorted;
