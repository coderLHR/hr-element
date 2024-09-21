import Form from "./Form.vue";
import FormItem from "./FormItem.vue";

import { withInstall } from "@hr-element/utils";

export const HrForm = withInstall(Form);
export const HrFormItem = withInstall(FormItem);

export * from "./hooks";
export * from "./types";

