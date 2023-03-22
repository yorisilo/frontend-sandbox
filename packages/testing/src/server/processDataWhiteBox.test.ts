// processDataWhiteBox.test.ts
import { processData, truncate, reverse, toUpperCase } from "./processData";

describe("processData - White-box Testing", () => {
  test("truncate function should truncate items longer than 10 characters", () => {
    const input = "abcdefghijklm";
    const expectedOutput = "abcdefghij";
    expect(truncate(input)).toEqual(expectedOutput);
  });

  test("reverse function should reverse items with even length", () => {
    const input = "abcd";
    const expectedOutput = "dcba";
    expect(reverse(input)).toEqual(expectedOutput);
  });

  test("toUpperCase function should convert items with odd length to uppercase", () => {
    const input = "abc";
    const expectedOutput = "ABC";
    expect(toUpperCase(input)).toEqual(expectedOutput);
  });

  test("processData should call the appropriate functions based on the input", () => {
    const input = ["apple", "watermelon", "banana", "kiwi", "hogehogehogehoge"];
    const expectedOutput = [
      "APPLE",
      "nolemretaw",
      "ananab",
      "iwik",
      "hogehogeho"
    ];
    expect(processData(input)).toEqual(expectedOutput);
  });
});
