import { withInstallFunction } from "@hr-element/utils";
import Message from "./methods";

export const HrMessage = withInstallFunction(Message, "$message");

export * from "./types";
