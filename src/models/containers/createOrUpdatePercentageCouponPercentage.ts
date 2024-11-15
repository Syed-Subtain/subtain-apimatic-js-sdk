/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type CreateOrUpdatePercentageCouponPercentage = number | string;

export const createOrUpdatePercentageCouponPercentageSchema: Schema<CreateOrUpdatePercentageCouponPercentage> = oneOf(
  [number(), string()]
);

export namespace CreateOrUpdatePercentageCouponPercentage {
  /**
   * Validation method to narrow down union type to number type case.
   *
   * This is Precision case.
   */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  /**
   * Validation method to narrow down union type to string type case.
   *
   * This is String case.
   */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}
