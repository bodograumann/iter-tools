/**
 * @generated-from ./$group.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { group, toArray } from '../../..';
import { unwrapDeep as uw } from '../../../__tests__/helpers';

describe('group', () => {
  it('main cursor', () => {
    const iter = group('AAABBAACCCCD');
    let next = iter.next();
    expect(next.value[0]).toBe('A');
    next = iter.next();
    expect(next.value[0]).toBe('B');
    next = iter.next();
    expect(next.value[0]).toBe('A');
    next = iter.next();
    expect(next.value[0]).toBe('C');
    next = iter.next();
    expect(next.value[0]).toBe('D');
    next = iter.next();
    expect(next.done).toBe(true);
  });

  it('secondary', () => {
    const iter = group('AAABBAACCCCD');
    let next = iter.next();
    expect(next.value[0]).toBe('A');
    expect(toArray(next.value[1])).toEqual(['A', 'A', 'A']);
    next = iter.next();
    expect(next.value[0]).toBe('B');
    expect(toArray(next.value[1])).toEqual(['B', 'B']);
    next = iter.next();
    expect(next.value[0]).toBe('A');
    expect(toArray(next.value[1])).toEqual(['A', 'A']);
    next = iter.next();
    expect(next.value[0]).toBe('C');
    expect(toArray(next.value[1])).toEqual(['C', 'C', 'C', 'C']);
    next = iter.next();
    expect(next.value[0]).toBe('D');
    expect(toArray(next.value[1])).toEqual(['D']);
    next = iter.next();
    expect(next.done).toBe(true);
  });

  it('secondary (consume partially)', () => {
    const iter = group('AAABBAACCCCD');
    let next = iter.next();
    expect(next.value[0]).toBe('A');
    expect(next.value[1].next().value).toBe('A');
    expect(next.value[1].next().value).toBe('A');
    expect(next.value[1].next().value).toBe('A');
    expect(next.value[1].next().done).toBe(true);
    next = iter.next();
    expect(next.value[0]).toBe('B');
    next = iter.next();
    expect(next.value[0]).toBe('A');
  });

  it('grouping an empty iterable returns empty iterable', () => {
    expect(toArray(group(null))).toEqual([]);
    expect(toArray(group(undefined))).toEqual([]);
  });

  it('errors if groups are consumed out of order', () => {
    const iter = group('AB');
    const group1 = iter.next().value;
    const group2 = iter.next().value;

    expect(group1[0]).toBe('A');
    expect(uw(group2)).toEqual(['B', ['B']]);

    let error;
    try {
      uw(group1[1]);
    } catch (e) {
      error = e;
    }
    expect(error).toMatchSnapshot();
  });
});
