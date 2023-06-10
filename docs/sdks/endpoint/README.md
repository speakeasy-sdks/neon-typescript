# endpoint

## Overview

These methods allow you to create and manage compute endpoints in your Neon project. For related information, see [Manage compute endpoints](https://neon.tech/docs/manage/endpoints).

### Available Operations

* [createProjectEndpoint](#createprojectendpoint) - Create an endpoint
* [deleteProjectEndpoint](#deleteprojectendpoint) - Delete an endpoint
* [getProjectEndpoint](#getprojectendpoint) - Get an endpoint
* [listProjectEndpoints](#listprojectendpoints) - Get a list of endpoints
* [startProjectEndpoint](#startprojectendpoint) - Start an endpoint
* [suspendProjectEndpoint](#suspendprojectendpoint) - Suspend an endpoint
* [updateProjectEndpoint](#updateprojectendpoint) - Update an endpoint

## createProjectEndpoint

Creates an endpoint for the specified branch.
An endpoint is a Neon compute instance.
There is a maximum of one endpoint per branch.
If the specified branch already has an endpoint, the operation fails.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain `branch_id` by listing the project's branches.
A `branch_id` has a `br-` prefix.
Currently, only the `read_write` endpoint type is supported.
For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import {
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.createProjectEndpoint({
  endpointCreateRequest: {
    endpoint: {
      autoscalingLimitMaxCu: 9698.1,
      autoscalingLimitMinCu: 6667.67,
      branchId: "mollitia",
      disabled: false,
      passwordlessAccess: false,
      poolerEnabled: false,
      poolerMode: EndpointPoolerMode.Transaction,
      provisioner: Provisioner.K8sNeonvm,
      regionId: "dolores",
      settings: {
        pgSettings: {
          "corporis": "explicabo",
        },
      },
      suspendTimeoutSeconds: 750686,
      type: EndpointType.ReadOnly,
    },
  },
  projectId: "omnis",
}).then((res: CreateProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateProjectEndpointRequest](../../models/operations/createprojectendpointrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateProjectEndpointResponse](../../models/operations/createprojectendpointresponse.md)>**


## deleteProjectEndpoint

Delete the specified endpoint.
An endpoint is a Neon compute instance.
Deleting an endpoint drops existing network connections to the endpoint.
The deletion is completed when last operation in the chain finishes successfully.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's endpoints.
An `endpoint_id` has an `ep-` prefix.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { DeleteProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import {
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.deleteProjectEndpoint({
  endpointId: "nemo",
  projectId: "minima",
}).then((res: DeleteProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteProjectEndpointRequest](../../models/operations/deleteprojectendpointrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteProjectEndpointResponse](../../models/operations/deleteprojectendpointresponse.md)>**


## getProjectEndpoint

Retrieves information about the specified endpoint.
An endpoint is a Neon compute instance.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's endpoints.
An `endpoint_id` has an `ep-` prefix.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import { EndpointPoolerMode, EndpointState, EndpointType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.getProjectEndpoint({
  endpointId: "excepturi",
  projectId: "accusantium",
}).then((res: GetProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProjectEndpointRequest](../../models/operations/getprojectendpointrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectEndpointResponse](../../models/operations/getprojectendpointresponse.md)>**


## listProjectEndpoints

Retrieves a list of endpoints for the specified project.
An endpoint is a Neon compute instance.
You can obtain a `project_id` by listing the projects for your Neon account.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectEndpointsResponse } from "neon-api/dist/sdk/models/operations";
import { EndpointPoolerMode, EndpointState, EndpointType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.listProjectEndpoints({
  projectId: "iure",
}).then((res: ListProjectEndpointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListProjectEndpointsRequest](../../models/operations/listprojectendpointsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListProjectEndpointsResponse](../../models/operations/listprojectendpointsresponse.md)>**


## startProjectEndpoint

Starts an endpoint. The endpoint is ready to use
after the last operation in chain finishes successfully.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's endpoints.
An `endpoint_id` has an `ep-` prefix.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { StartProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import {
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.startProjectEndpoint({
  endpointId: "culpa",
  projectId: "doloribus",
}).then((res: StartProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.StartProjectEndpointRequest](../../models/operations/startprojectendpointrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.StartProjectEndpointResponse](../../models/operations/startprojectendpointresponse.md)>**


## suspendProjectEndpoint

Suspend the specified endpoint
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's endpoints.
An `endpoint_id` has an `ep-` prefix.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { SuspendProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import {
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.suspendProjectEndpoint({
  endpointId: "sapiente",
  projectId: "architecto",
}).then((res: SuspendProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.SuspendProjectEndpointRequest](../../models/operations/suspendprojectendpointrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.SuspendProjectEndpointResponse](../../models/operations/suspendprojectendpointresponse.md)>**


## updateProjectEndpoint

Updates the specified endpoint. Currently, only changing the associated branch is supported.
The branch that you specify cannot have an existing endpoint.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` and `branch_id` by listing your project's endpoints.
An `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.
For more information about endpoints, see [Manage endpoints](https://neon.tech/docs/manage/endpoints/).

If the returned list of operations is not empty, the endpoint is not ready to use.
The client must wait for the last operation to finish before using the endpoint.
If the endpoint was idle before the update, the endpoint becomes active for a short period of time,
and the control plane suspends it again after the update.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { UpdateProjectEndpointResponse } from "neon-api/dist/sdk/models/operations";
import {
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
  },
});

sdk.endpoint.updateProjectEndpoint({
  endpointUpdateRequest: {
    endpoint: {
      autoscalingLimitMaxCu: 6527.9,
      autoscalingLimitMinCu: 2088.76,
      branchId: "culpa",
      disabled: false,
      passwordlessAccess: false,
      poolerEnabled: false,
      poolerMode: EndpointPoolerMode.Transaction,
      provisioner: Provisioner.K8sPod,
      settings: {
        pgSettings: {
          "mollitia": "occaecati",
          "numquam": "commodi",
          "quam": "molestiae",
          "velit": "error",
        },
      },
      suspendTimeoutSeconds: 158969,
    },
  },
  endpointId: "quis",
  projectId: "vitae",
}).then((res: UpdateProjectEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateProjectEndpointRequest](../../models/operations/updateprojectendpointrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateProjectEndpointResponse](../../models/operations/updateprojectendpointresponse.md)>**

