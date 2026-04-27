import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import mainRoutes from "./main.routes";
import MainLayout from "@/layouts/mainLayout/MainLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    redirect: { name: "Dashboard" },
    children: mainRoutes,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory("/device-control"),
  routes,
});
