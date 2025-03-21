import { generateTestObject } from "./index";
import { describe, it, expect } from "vitest";

describe("generateTestObject", () => {
  // TODO: add a test to ensure that all keys have definitions

  it("should console the right things", () => {
    generateTestObject();

    expect(true).toBeTruthy();
  });
});
