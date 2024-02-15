/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Configuration, Environment } from './configuration';
import { RetryConfiguration } from './core';

/** Default values for the configuration parameters of the client. */
export const DEFAULT_CONFIGURATION: Configuration = {
  timeout: 30000,
  environment: Environment.Production,
  subdomain: 'subdomain',
  domain: 'chargify.com',
};

/** Default values for retry configuration parameters. */
export const DEFAULT_RETRY_CONFIG: RetryConfiguration = {
  maxNumberOfRetries: 0,
  retryOnTimeout: true,
  retryInterval: 1,
  maximumRetryWaitTime: 0,
  backoffFactor: 2,
  httpStatusCodesToRetry: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
  httpMethodsToRetry: ['GET', 'PUT'],
};
