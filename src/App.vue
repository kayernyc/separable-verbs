<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <TopNav />
  <RouterView />
</template>

<style scoped>
main {
  padding-top: 1rem;
}
</style>
