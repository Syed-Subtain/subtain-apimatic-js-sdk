
# Metafield

## Structure

`Metafield`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `scope` | [`MetafieldScope \| undefined`](../../doc/models/metafield-scope.md) | Optional | Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. |
| `dataCount` | `number \| undefined` | Optional | the amount of subscriptions this metafield has been applied to in Chargify |
| `inputType` | `string \| undefined` | Optional | - |
| `mEnum` | [`MetafieldEnum[] \| null \| undefined`](../../doc/models/containers/metafield-enum.md) | Optional | This is Array of a container for one-of cases. |

## Example (as JSON)

```json
{
  "id": 41.48,
  "name": "name8",
  "scope": {
    "csv": "0",
    "invoices": "0",
    "statements": "0",
    "portal": "0",
    "public_show": "0"
  },
  "data_count": 216,
  "input_type": "input_type0"
}
```

