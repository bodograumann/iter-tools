/**
 * @generated-from ./$consume.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncConsume } from '../../..';

describe('asyncConsume', () => {
  it('consumes an iterable', async () => {
    const arr: Array<number> = [];
    await asyncConsume(
      (function*() {
        arr.push(1);
        yield;
        arr.push(2);
        yield;
        arr.push(3);
      })(),
    );
    expect(arr).toEqual([1, 2, 3]);
  });
});
