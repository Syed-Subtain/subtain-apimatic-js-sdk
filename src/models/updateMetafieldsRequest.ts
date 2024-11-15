/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  UpdateMetafieldsRequestMetafields,
  updateMetafieldsRequestMetafieldsSchema,
} from './containers/updateMetafieldsRequestMetafields';

export interface UpdateMetafieldsRequest {
  metafields?: UpdateMetafieldsRequestMetafields;
}

export const updateMetafieldsRequestSchema: Schema<UpdateMetafieldsRequest> = object(
  {
    metafields: [
      'metafields',
      optional(updateMetafieldsRequestMetafieldsSchema),
    ],
  }
);
