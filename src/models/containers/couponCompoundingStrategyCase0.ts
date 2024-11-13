/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  CompoundingStrategy,
  compoundingStrategySchema,
} from '../compoundingStrategy';

/** This is a container type for one-of types. */
export type CouponCompoundingStrategyCase0 = CompoundingStrategy;

export const couponCompoundingStrategyCase0Schema: Schema<CouponCompoundingStrategyCase0> = oneOf(
  [compoundingStrategySchema]
);

export namespace CouponCompoundingStrategyCase0 {
  /**
   * Validation method to narrow down union type to CompoundingStrategy type case.
   *
   * This is Compounding Strategy case.
   */
  export function isCompoundingStrategy(
    value: unknown
  ): value is CompoundingStrategy {
    const validationResult = validateAndMap(value, compoundingStrategySchema);
    return validationResult.errors === false;
  }
}
