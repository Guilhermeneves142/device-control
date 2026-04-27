import { createApp } from "vue";
import "./style.css";
import { router } from "@/routes/routes";
import DashboardDevice from "./DashboardDevice.vue";
import makeServer from "@/mocks/server";

const app = createApp(DashboardDevice);

makeServer();

app.use(router);

app.mount("#app");
