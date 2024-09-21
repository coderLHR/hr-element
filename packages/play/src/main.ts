import HrElement from "hr-element";
import { createApp } from "vue";
import App from "./App.vue";

import "hr-element/dist/index.css";

createApp(App).use(HrElement).mount("#app");
