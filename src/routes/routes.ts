import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";
import autenticatedRoutes from "./autenticated.routes";
import MainLayout from "@/layouts/mainLayout/MainLayout.vue";
import notAutenticatedRoutes from "./notAutenticated.routes";
import NotAutenticatedLayout from "@/layouts/notAutenticated/NotAutenticatedLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/#",
    component: MainLayout,
    redirect: { name: "Dashboard" },
    children: autenticatedRoutes,
  },
  {
    path: "/",
    component: NotAutenticatedLayout,
    redirect: { name: "Homepage" },
    children: notAutenticatedRoutes,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory("/device-control"),
  // history: createWebHistory(),
  routes,
});
