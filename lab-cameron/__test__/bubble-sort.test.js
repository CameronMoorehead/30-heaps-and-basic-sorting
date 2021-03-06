'use strict';

const bubbleSort = require('../model/bubble-sort');

describe('bubble-sort.js', () =>  {
  test('should sort unsorted array', () =>  {
    const unsortedArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(bubbleSort(unsortedArray)).toEqual(expected);
  });
});
