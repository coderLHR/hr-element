import Option from "./Option.vue";
import Select from "./Select.vue";

import { withInstall } from "@hr-element/utils";

export const HrSelect = withInstall(Select);
export const HrOption = withInstall(Option);

console.log("Select", Select, "Option", Option);

export * from "./types";
