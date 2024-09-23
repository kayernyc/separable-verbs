<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/quizzes">Quizzes</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/reference/separable-rules"
      >German separable particles</RouterLink
    >
    <RouterLink to="/reference/german-verbs">German verbs</RouterLink>
  </nav>
</template>

<style scoped>
nav > * {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>
