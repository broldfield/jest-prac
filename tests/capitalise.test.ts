import { describe, expect, test } from "@jest/globals";
import capitalise from "../src/capitalise";

describe("Capitalise module", () => {
  test("Capitalises first letter", () => {
    expect(capitalise("word")).toBe("Word");
  });
  test("Capitalises first letter", () => {
    expect(capitalise("this test")).toBe("This test");
  });
});
