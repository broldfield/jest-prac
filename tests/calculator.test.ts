import { describe, expect, test } from "@jest/globals";
import calculator from "../src/calculator";

describe("calculator module", () => {
  test("adding two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test("subtract two numbers", () => {
    expect(calculator.subtract(4, 1)).toBe(3);
  });
  test("divide two numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
