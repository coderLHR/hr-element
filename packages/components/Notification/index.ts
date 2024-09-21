import { withInstallFunction } from '@hr-element/utils';
import Notification from "./methods";

export const HrNotification = withInstallFunction(Notification, '$notify')

export * from './types';

