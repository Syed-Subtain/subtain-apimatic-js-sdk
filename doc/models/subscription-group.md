
# Subscription Group

## Structure

`SubscriptionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfile` | [`SubscriptionGroupPaymentProfile \| undefined`](../../doc/models/subscription-group-payment-profile.md) | Optional | - |
| `paymentCollectionMethod` | `string \| undefined` | Optional | - |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "customer_id": 36,
  "payment_profile": {
    "id": 44,
    "first_name": "first_name4",
    "last_name": "last_name2",
    "masked_card_number": "masked_card_number2"
  },
  "payment_collection_method": "payment_collection_method8",
  "subscription_ids": [
    146,
    147,
    148
  ],
  "created_at": "created_at2"
}
```

