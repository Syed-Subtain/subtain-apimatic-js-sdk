/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { PricingScheme, pricingSchemeSchema } from '../pricingScheme';

/** This is a container type for one-of types. */
export type OveragePricingPricingScheme = PricingScheme;

export const overagePricingPricingSchemeSchema: Schema<OveragePricingPricingScheme> = oneOf(
  [pricingSchemeSchema]
);

export namespace OveragePricingPricingScheme {
  /**
   * Validation method to narrow down union type to PricingScheme type case.
   *
   * This is Pricing Scheme case.
   */
  export function isPricingScheme(value: unknown): value is PricingScheme {
    const validationResult = validateAndMap(value, pricingSchemeSchema);
    return validationResult.errors === false;
  }
}
