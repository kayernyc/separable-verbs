<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <TopNav />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0;
  border-left: 1px solid var(--color-border);
}
</style>
