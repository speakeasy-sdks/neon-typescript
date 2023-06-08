# apiKey

## Overview

These methods allow you to create and manage API keys for your Neon account. For related information, see [Manage API keys](https://neon.tech/docs/manage/api-keys).

### Available Operations

* [createApiKey](#createapikey) - Create an API key
* [listApiKeys](#listapikeys) - Get a list of API keys
* [revokeApiKey](#revokeapikey) - Revoke an API key

## createApiKey

Creates an API key.
The `key_name` is a user-specified name for the key.
This method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateApiKeyResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.apiKey.createApiKey({
  keyName: "provident",
}).then((res: CreateApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listApiKeys

Retrieves the API keys for your Neon account.
The response does not include API key tokens. A token is only provided when creating an API key.
API keys can also be managed in the Neon Console.
For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListApiKeysResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.apiKey.listApiKeys().then((res: ListApiKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeApiKey

Revokes the specified API key.
An API key that is no longer needed can be revoked.
This action cannot be reversed.
You can obtain `key_id` values by listing the API keys for your Neon account.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { RevokeApiKeyResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.apiKey.revokeApiKey({
  keyId: 715190,
}).then((res: RevokeApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
