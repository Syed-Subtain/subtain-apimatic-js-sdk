/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { SortingDirection, sortingDirectionSchema } from '../sortingDirection';

/** This is a container type for one-of types. */
export type ListCustomersInputDirection = SortingDirection;

export const listCustomersInputDirectionSchema: Schema<ListCustomersInputDirection> = oneOf(
  [sortingDirectionSchema]
);

export namespace ListCustomersInputDirection {
  /**
   * Validation method to narrow down union type to SortingDirection type case.
   *
   * This is Sorting direction case.
   */
  export function isSortingDirection(
    value: unknown
  ): value is SortingDirection {
    const validationResult = validateAndMap(value, sortingDirectionSchema);
    return validationResult.errors === false;
  }
}
