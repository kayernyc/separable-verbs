<script setup lang="ts">
import { GermanParticleRules } from "@constants/germanConstants";

const ruleSet = Object.entries(GermanParticleRules).map(([key, value]) => ({
  key,
  value,
}));
</script>

<template>
  <main>
    <h2>Separable Particles</h2>

    <li v-for="item in ruleSet">
      <strong>{{ item.key }}</strong>
      <p>{{ item.value }}</p>
    </li>
  </main>
</template>

<style>
li {
  list-style: none;
  margin-bottom: 1rem;
}
strong {
  font-weight: bold;
}
</style>
