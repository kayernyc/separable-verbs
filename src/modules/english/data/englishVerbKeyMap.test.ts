import englishVerbKeyMap from "./englishVerbKeyMap.json";
import { englishVerbDictionary, modalMap } from "./englishVerbDictionary";
import { describe, it, expect } from "vitest";

describe("english key completeness", () => {
  const verbKeys = Object.keys(englishVerbKeyMap);
  const verbs = Object.keys(englishVerbDictionary);
  const modalVerbs = Object.keys(modalMap);

  it("All keys have definitions for their base verbs", () => {
    const missingVerbKeys: string[] = [];

    verbKeys.forEach((key) => {
      if (!verbs.includes(key) && !modalVerbs.includes(key) && key !== "be") {
        missingVerbKeys.push(key);
      }
    });

    if (missingVerbKeys.length > 0) {
      console.log(missingVerbKeys);
    }

    expect(missingVerbKeys.length).toBe(0);
  });
});
