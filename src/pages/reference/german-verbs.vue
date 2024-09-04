<script setup lang="ts">
import germanSeparableVerbs from "@constants/germanSeparable.json";

const ruleSet = Object.entries(germanSeparableVerbs).map(([key, value]) => ({
  key,
  value: value.translations.en,
}));
</script>

<template>
  <main>
    <h2>German verbs</h2>

    <li v-for="listing in ruleSet" class="listings">
      <strong>{{ listing.key }}</strong>
      <p v-if="Array.isArray(listing.value)">
        <li v-for="definition in listing.value">{{ definition }}</li>
      </p>
      <p v-else>{{ listing.value }}</p>
    </li>
  </main>
</template>

<style>
li.listings {
  list-style: none;
  margin-bottom: 1rem;
}

.listings p {
  margin-left: 1rem;

  & li {
    margin: 0;
  }
}

strong {
  font-weight: bold;
}
</style>
