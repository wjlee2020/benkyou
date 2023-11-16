import {
  binarySearchWithArraySplitting,
  binarySearchWithLoops,
  binarySearchWithRecursion,
  binarySearchWithTailRecursion,
} from "./binary_search";
import { describe, expect, test } from "bun:test";

describe("Binary Search with loops", () => {
  test("[], 2 to be -1", () => {
    expect(binarySearchWithLoops([], 2)).toStrictEqual(-1);
  });

  test("[1], 1 to be 0", () => {
    expect(binarySearchWithLoops([1], 1)).toStrictEqual(0);
  });

  test("[1], 2 to be -1", () => {
    expect(binarySearchWithLoops([1], 2)).toStrictEqual(-1);
  });

  test("[1,2,3], 2 to be 1", () => {
    expect(binarySearchWithLoops([1, 2, 3], 2)).toStrictEqual(1);
  });

  test("[1,2,3], 3 to be 2", () => {
    expect(binarySearchWithLoops([1, 2, 3], 3)).toStrictEqual(2);
  });
});

describe("Binary Search with recursion", () => {
  test("[], 2 to be -1", () => {
    expect(binarySearchWithRecursion([], 2)).toStrictEqual(-1);
  });

  test("[1], 1 to be 0", () => {
    expect(binarySearchWithRecursion([1], 1)).toStrictEqual(0);
  });

  test("[1], 2 to be -1", () => {
    expect(binarySearchWithRecursion([1], 2)).toStrictEqual(-1);
  });

  test("[1,2,3], 2 to be 1", () => {
    expect(binarySearchWithRecursion([1, 2, 3], 2)).toStrictEqual(1);
  });

  test("[1,2,3], 3 to be 2", () => {
    expect(binarySearchWithRecursion([1, 2, 3], 3)).toStrictEqual(2);
  });
});

describe("Binary Search with tail recursion", () => {
  test("[], 2 to be -1", () => {
    expect(binarySearchWithTailRecursion([], 2)).toStrictEqual(-1);
  });

  test("[1], 1 to be 0", () => {
    expect(binarySearchWithTailRecursion([1], 1)).toStrictEqual(0);
  });

  test("[1], 2 to be -1", () => {
    expect(binarySearchWithTailRecursion([1], 2)).toStrictEqual(-1);
  });

  test("[1,2,3], 2 to be 1", () => {
    expect(binarySearchWithTailRecursion([1, 2, 3], 2)).toStrictEqual(1);
  });

  test("[1,2,3], 3 to be 2", () => {
    expect(binarySearchWithTailRecursion([1, 2, 3], 3)).toStrictEqual(2);
  });
});

describe("Binary Search with array splitting", () => {
  test("[], 2 to be -1", () => {
    expect(binarySearchWithArraySplitting([], 2)).toStrictEqual(-1);
  });

  test("[1], 1 to be 0", () => {
    expect(binarySearchWithArraySplitting([1], 1)).toStrictEqual(0);
  });

  test("[1], 2 to be -1", () => {
    expect(binarySearchWithArraySplitting([1], 2)).toStrictEqual(-1);
  });

  test("[1,2,3], 2 to be 1", () => {
    expect(binarySearchWithArraySplitting([1, 2, 3], 2)).toStrictEqual(1);
  });

  test("[1,2,3], 3 to be 2", () => {
    expect(binarySearchWithArraySplitting([1, 2, 3], 3)).toStrictEqual(2);
  });
});
