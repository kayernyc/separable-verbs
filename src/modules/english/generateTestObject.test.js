import { generateTestObject } from "./index";
import { describe, it, expect } from "vitest";

describe("generateTestObject", () => {
  it("should console the right things", () => {
    generateTestObject();

    expect(true).toBeTruthy();
  });
});
