import { describe, expect, test } from "bun:test";
import { bubbleSort, insertionSort } from "../sorts";

describe("sorting", () => {
  const numbList = [2, 3, 1, 6, 4, 7, 5];
  const sortedList = [1, 2, 3, 4, 5, 6, 7];

  test(`${numbList} should sort to ${sortedList} using bubble sort`, () => {
    expect(bubbleSort(numbList)).toEqual(sortedList);
  });

  test(`${numbList} should sort to ${sortedList} using insertion sort`, () => {
    expect(insertionSort(numbList)).toEqual(sortedList);
  });
});
