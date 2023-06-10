# operation

## Overview

These methods allow you to view operation details for your Neon project. For related information, see [Operations](https://neon.tech/docs/manage/operations).

### Available Operations

* [getProjectOperation](#getprojectoperation) - Get operation details
* [listProjectOperations](#listprojectoperations) - Get a list of operations

## getProjectOperation

Retrieves details for the specified operation.
An operation is an action performed on a Neon project resource.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `operation_id` by listing operations for the project.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectOperationResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.operation.getProjectOperation({
  operationId: "aa52c3f5-ad01-49da-9ffe-78f097b0074f",
  projectId: "dicta",
}).then((res: GetProjectOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetProjectOperationRequest](../../models/operations/getprojectoperationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetProjectOperationResponse](../../models/operations/getprojectoperationresponse.md)>**


## listProjectOperations

Retrieves a list of operations for the specified Neon project.
You can obtain a `project_id` by listing the projects for your Neon account.
The number of operations returned can be large.
To paginate the response, issue an initial request with a `limit` value.
Then, add the `cursor` value that was returned in the response to the next request.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectOperationsResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.operation.listProjectOperations({
  cursor: "corporis",
  limit: 296140,
  projectId: "iusto",
}).then((res: ListProjectOperationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListProjectOperationsRequest](../../models/operations/listprojectoperationsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListProjectOperationsResponse](../../models/operations/listprojectoperationsresponse.md)>**

