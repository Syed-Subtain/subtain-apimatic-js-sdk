/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ComponentPricePointItem,
  componentPricePointItemSchema,
} from './componentPricePointItem';
import {
  EBBComponentPricingScheme,
  eBBComponentPricingSchemeSchema,
} from './containers/eBBComponentPricingScheme';
import {
  EBBComponentUnitPrice,
  eBBComponentUnitPriceSchema,
} from './containers/eBBComponentUnitPrice';
import { Price, priceSchema } from './price';

export interface EBBComponent {
  /** A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". */
  name: string;
  /** The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e. “message”, which may then be shown as “5 messages” on a subscription’s component line-item */
  unitName: string;
  /** A description for the component that will be displayed to the user on the hosted signup page. */
  description?: string;
  /** A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'. */
  handle?: string;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: EBBComponentPricingScheme;
  /** (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#general-price-bracket-rules) for an overview of how price brackets work for different pricing schemes. */
  prices?: Price[];
  upgradeCharge?: string;
  downgradeCredit?: string;
  pricePoints?: ComponentPricePointItem[];
  /** The amount the customer will be charged per unit when the pricing scheme is “per_unit”. The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice?: EBBComponentUnitPrice;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string;
  /** (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. */
  hideDateRangeOnInvoice?: boolean;
  /** deprecated May 2011 - use unit_price instead */
  priceInCents?: string;
  /** The ID of an event based billing metric that will be attached to this component. */
  eventBasedBillingMetricId: number;
}

export const eBBComponentSchema: Schema<EBBComponent> = object({
  name: ['name', string()],
  unitName: ['unit_name', string()],
  description: ['description', optional(string())],
  handle: ['handle', optional(string())],
  taxable: ['taxable', optional(boolean())],
  pricingScheme: ['pricing_scheme', eBBComponentPricingSchemeSchema],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
  upgradeCharge: ['upgrade_charge', optional(string())],
  downgradeCredit: ['downgrade_credit', optional(string())],
  pricePoints: [
    'price_points',
    optional(array(lazy(() => componentPricePointItemSchema))),
  ],
  unitPrice: ['unit_price', optional(eBBComponentUnitPriceSchema)],
  taxCode: ['tax_code', optional(string())],
  hideDateRangeOnInvoice: ['hide_date_range_on_invoice', optional(boolean())],
  priceInCents: ['price_in_cents', optional(string())],
  eventBasedBillingMetricId: ['event_based_billing_metric_id', number()],
});
