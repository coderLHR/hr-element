import type { App } from "vue";
import { vLoading } from "./directive";
import { Loading } from "./service";

export const HrLoading = {
  name: "HrLoading",
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default HrLoading;

export {
    vLoading as HrLoadingDirective,
    Loading as HrLoadingService, vLoading
};

    export * from "./types";

