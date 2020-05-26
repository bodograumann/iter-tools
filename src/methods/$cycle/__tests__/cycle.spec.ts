/**
 * @generated-from ./$cycle.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { ResultIterable } from '../../../types/iterable';
import { cycle } from '../../..';

declare const Ø: never;

assert<ResultIterable<0 | 1 | 2>>(cycle(Ø as [0, 1, 2]));

assert<ResultIterable<never> | ResultIterable<0 | 1> | ResultIterable<string | number | boolean>>(
  cycle(Ø as [] | [0, 1] | [string, number, boolean]),
);

assert<ResultIterable<string | number | boolean>>(
  cycle(Ø as [] | [0, 1] | [string, number, boolean]),
);

assert<ResultIterable<string>>(cycle(Ø as string));

assert<ResultIterable<0 | 1 | 2>>(cycle(Ø as Set<0 | 1 | 2>));
