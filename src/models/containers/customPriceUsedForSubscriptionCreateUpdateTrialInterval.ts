/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type CustomPriceUsedForSubscriptionCreateUpdateTrialInterval =
  | string
  | number;

export const customPriceUsedForSubscriptionCreateUpdateTrialIntervalSchema: Schema<CustomPriceUsedForSubscriptionCreateUpdateTrialInterval> = oneOf(
  [string(), number()]
);

export namespace CustomPriceUsedForSubscriptionCreateUpdateTrialInterval {
  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  /**
   * Validation method to narrow down union type to number type case.
   *
   * This is Number case.
   */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
}
