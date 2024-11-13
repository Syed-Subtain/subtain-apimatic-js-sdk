/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import {
  RefundInvoiceRequestRefund,
  refundInvoiceRequestRefundSchema,
} from './containers/refundInvoiceRequestRefund';

export interface RefundInvoiceRequest {
  refund: RefundInvoiceRequestRefund;
}

export const refundInvoiceRequestSchema: Schema<RefundInvoiceRequest> = object({
  refund: ['refund', refundInvoiceRequestRefundSchema],
});
