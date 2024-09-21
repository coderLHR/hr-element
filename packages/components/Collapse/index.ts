import { withInstall } from '@hr-element/utils';
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

export const HrCollapse = withInstall(Collapse)
export const HrCollapseItem = withInstall(CollapseItem)

export * from './types';
