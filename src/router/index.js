import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("@/views/HomeView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: import("@/views/ProductView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
