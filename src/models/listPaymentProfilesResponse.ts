/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ListPaymentProfileItem,
  listPaymentProfileItemSchema,
} from './listPaymentProfileItem';

export interface ListPaymentProfilesResponse {
  paymentProfile?: ListPaymentProfileItem;
}

export const listPaymentProfilesResponseSchema: Schema<ListPaymentProfilesResponse> = object(
  {
    paymentProfile: [
      'payment_profile',
      optional(lazy(() => listPaymentProfileItemSchema)),
    ],
  }
);
