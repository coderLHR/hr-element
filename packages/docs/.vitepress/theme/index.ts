import HrElement from "hr-ui";
import { ElementPlusContainer } from "vitepress-preview-component";
import DefaultTheme from "vitepress/theme";
import type { App } from "vue";

import "hr-ui/dist/index.css";
import "vitepress-preview-component/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(HrElement);
  },
};
