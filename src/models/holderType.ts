/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for HolderType
 */
export enum HolderType {
  Personal = 'personal',
  Business = 'business',
}

/**
 * Schema for HolderType
 */
export const holderTypeSchema: Schema<HolderType> = stringEnum(HolderType);
