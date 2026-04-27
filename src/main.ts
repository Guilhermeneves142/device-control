import { createApp } from "vue";
import "./style.css";
import { router } from "@/routes/routes";
import DashboardDevice from "./DashboardDevice.vue";

const app = createApp(DashboardDevice);

app.use(router);

app.mount("#app");
