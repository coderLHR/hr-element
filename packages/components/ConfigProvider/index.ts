import { withInstall } from '@hr-element/utils';
import ConfigProvider from "./ConfigProvider.vue";

export const HrConfigProvider = withInstall(ConfigProvider)

export * from './hooks';
export * from './types';

