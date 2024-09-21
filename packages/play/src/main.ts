import HrElement from "hr-ui";
import { createApp } from "vue";
import App from "./App.vue";

import "hr-ui/dist/index.css";

createApp(App).use(HrElement).mount("#app");
