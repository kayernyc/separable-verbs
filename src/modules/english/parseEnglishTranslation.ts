import { particles } from "./languageConstants";
import type { ParsedTranslation } from "./types";

export const parseEnglishTranslation = (entry: string): ParsedTranslation => {
  const parts = entry.split(" ");

  if (parts.length < 1) {
    throw Error("Translation passed as empty string");
  }

  sanitizeBaseVerb(parts);
  let compliment;
  const baseVerb = parts.shift() || "";
  const particle = particles.includes(parts[0]) ? parts[0] : undefined;
  if (parts.length > 1) {
    compliment = parts.join(" ");
  }

  return {
    baseVerb,
    compliment,
    particle,
  };
};

function sanitizeBaseVerb(parts: string[]) {
  const simpleVerb = parts[0];
  if (simpleVerb.includes(",") || simpleVerb.includes("/")) {
    throw Error(`Malformed translation: ${parts.join(" ")}`);
  }
}
