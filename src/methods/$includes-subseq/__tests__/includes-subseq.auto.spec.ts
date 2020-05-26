/**
 * @generated-from ./includes-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { includesSubseq, range } from '../../..';

describe('includesSubseq', () => {
  it('returns true if the iterable contains the given subsequence', () => {
    expect(includesSubseq([1, 2], range(0, 10))).toBe(true);
  });

  it('returns true if the iterable equals given subsequence', () => {
    expect(includesSubseq(range(1, 3), range(1, 3))).toBe(true);
  });

  it('returns true if the given subsequence is empty', () => {
    expect(includesSubseq([], range(1, 3))).toBe(true);
  });

  it('returns false if subsequence is longer than the iterable', () => {
    expect(includesSubseq(range(1, 4), range(1, 3))).toBe(false);
  });

  describe('when the iterable is empty', () => {
    it('returns true if the subsequence is empty', () => {
      expect(includesSubseq([], [])).toBe(true);
    });

    it('returns false if the subsequence is not empty', () => {
      expect(includesSubseq([undefined], [])).toBe(false);
    });
  });
});
