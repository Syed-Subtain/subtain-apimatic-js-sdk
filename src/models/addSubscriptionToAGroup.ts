/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  AddSubscriptionToAGroupGroup,
  addSubscriptionToAGroupGroupSchema,
} from './containers/addSubscriptionToAGroupGroup';

export interface AddSubscriptionToAGroup {
  group?: AddSubscriptionToAGroupGroup;
}

export const addSubscriptionToAGroupSchema: Schema<AddSubscriptionToAGroup> = object(
  { group: ['group', optional(addSubscriptionToAGroupGroupSchema)] }
);
