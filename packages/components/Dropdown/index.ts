import { withInstall } from '@hr-element/utils';
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";

export const HrDropdown = withInstall(Dropdown)
export const HrDropdownItem = withInstall(DropdownItem)

export * from './types';

