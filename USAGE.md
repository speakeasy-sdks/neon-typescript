<!-- Start SDK Example Usage -->
```typescript
import { NeonApi } from "neon-api";
import { CreateApiKeyResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.apiKey.createApiKey({
  keyName: "corrupti",
}).then((res: CreateApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->