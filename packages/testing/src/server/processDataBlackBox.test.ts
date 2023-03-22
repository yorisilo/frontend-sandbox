import { processData } from "./processData";

describe("processData - Black-box Testing", () => {
  test("should process data correctly", () => {
    const input = ["apple", "watermelon", "banana", "kiwi"];
    const expectedOutput = ["APPLE", "nolemretaw", "ananab", "iwik"];
    expect(processData(input)).toEqual(expectedOutput);
  });

  test("should return an empty array for an empty input", () => {
    const input: string[] = [];
    const expectedOutput: string[] = [];
    expect(processData(input)).toEqual(expectedOutput);
  });

  test("should process data with various string lengths", () => {
    const input = ["a", "ab", "abc", "abcd", "abcdefghijk"];
    const expectedOutput = ["A", "ba", "ABC", "dcba", "abcdefghij"];
    expect(processData(input)).toEqual(expectedOutput);
  });
});
