/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { IntervalUnit, intervalUnitSchema } from '../intervalUnit';

/** This is a container type for one-of types. */
export type CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit =
  | IntervalUnit;

export const customPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnitSchema: Schema<CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit> = oneOf(
  [intervalUnitSchema]
);

export namespace CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit {
  /**
   * Validation method to narrow down union type to IntervalUnit type case.
   *
   * This is Interval Unit case.
   */
  export function isIntervalUnit(value: unknown): value is IntervalUnit {
    const validationResult = validateAndMap(value, intervalUnitSchema);
    return validationResult.errors === false;
  }
}
