export default [
  {
    path: "dashboard",
    name: "Dashboard",
    component: () => import("@/pages/dashboard/DashboardPage.vue"),
  },
  {
    path: "devices",
    name: "Devices",
    component: () => import("@/pages/devices/DevicesPage.vue"),
  },
  {
    path: "costs",
    name: "Costs",
    component: () => import("@/pages/costs/CostsPage.vue"),
  },
];
