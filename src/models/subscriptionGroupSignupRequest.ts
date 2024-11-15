/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionGroupSignup,
  subscriptionGroupSignupSchema,
} from './subscriptionGroupSignup';

export interface SubscriptionGroupSignupRequest {
  subscriptionGroup: SubscriptionGroupSignup;
}

export const subscriptionGroupSignupRequestSchema: Schema<SubscriptionGroupSignupRequest> = object(
  {
    subscriptionGroup: [
      'subscription_group',
      lazy(() => subscriptionGroupSignupSchema),
    ],
  }
);
