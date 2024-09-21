import { withInstall } from "@hr-element/utils";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";

export const HrButton = withInstall(Button);
export const HrButtonGroup = withInstall(ButtonGroup);

export * from "./types";
