# preview

## Overview

New API methods that are in Beta / Preview state and could be subjected to significant changes in the future.

### Available Operations

* [listProjectsConsumption](#listprojectsconsumption) - Get a list of projects consumption

## listProjectsConsumption

Note, this is a preview API and could be subjected to significant changes in the future.
Retrieves a list of per-project consumption for the current billing period.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectsConsumptionResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.preview.listProjectsConsumption({
  cursor: "dicta",
  limit: 688661,
}).then((res: ListProjectsConsumptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
