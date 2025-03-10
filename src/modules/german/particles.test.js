import germanSeparableVerbs from "@constants/germanSeparable.json";
import { GermanParticleRules } from "@constants/germanConstants";
import { describe, it, expect } from "vitest";

describe("German Separable Verbs", () => {
  const particles = Object.keys(GermanParticleRules);
  const verbs = Object.values(germanSeparableVerbs);

  verbs.forEach((verb) => {
    it(`should have particle ${verb.particle} that matches GermanParticleRules`, () => {
      const particle = verb.particle;
      expect(particles).toContain(particle);
    });
  });
});
