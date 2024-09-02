import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reference/separable-rules",
      name: "separable-rules",
      component: () => import("../views/reference/SeparableRules.vue"),
    },
    {
      path: "/reference/german-verbs",
      name: "german-verbs",
      component: () => import("../views/reference/GermanSeparableVerbs.vue"),
    },
  ],
});

export default router;
