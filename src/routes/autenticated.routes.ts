export default [
  {
    path: "dashboard",
    name: "Dashboard",
    component: () => import("@/pages/autenticated/dashboard/DashboardPage.vue"),
  },
  {
    path: "devices",
    name: "Devices",
    component: () => import("@/pages/autenticated/devices/DevicesPage.vue"),
  },
  {
    path: "costs",
    name: "Costs",
    component: () => import("@/pages/autenticated/costs/CostsPage.vue"),
  },
];
