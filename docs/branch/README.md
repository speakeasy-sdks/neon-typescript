# branch

## Overview

These methods allow you to create and manage branches in your Neon project. For related information, see [Manage branches](https://neon.tech/docs/manage/branches).

### Available Operations

* [createProjectBranch](#createprojectbranch) - Create a branch
* [createProjectBranchDatabase](#createprojectbranchdatabase) - Create a database
* [createProjectBranchRole](#createprojectbranchrole) - Create a role
* [deleteProjectBranch](#deleteprojectbranch) - Delete a branch
* [deleteProjectBranchDatabase](#deleteprojectbranchdatabase) - Delete a database
* [deleteProjectBranchRole](#deleteprojectbranchrole) - Delete a role
* [getProjectBranch](#getprojectbranch) - Get branch details
* [getProjectBranchDatabase](#getprojectbranchdatabase) - Get database details
* [getProjectBranchRole](#getprojectbranchrole) - Get role details
* [getProjectBranchRolePassword](#getprojectbranchrolepassword) - Get role password
* [listProjectBranchDatabases](#listprojectbranchdatabases) - Get a list of databases
* [listProjectBranchEndpoints](#listprojectbranchendpoints) - Get a list of branch endpoints
* [listProjectBranchRoles](#listprojectbranchroles) - Get a list of roles
* [listProjectBranches](#listprojectbranches) - Get a list of branches
* [resetProjectBranchRolePassword](#resetprojectbranchrolepassword) - Reset the role password
* [setPrimaryProjectBranch](#setprimaryprojectbranch) - Set the branch as the primary branch of a project
* [updateProjectBranch](#updateprojectbranch) - Update a branch
* [updateProjectBranchDatabase](#updateprojectbranchdatabase) - Update a database

## createProjectBranch

Creates a branch in the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.

This method does not require a request body, but you can specify one to create an endpoint for the branch or to select a non-default parent branch.
The default behavior is to create a branch from the project's root branch (`main`) with no endpoint, and the branch name is auto-generated.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateProjectBranchResponse } from "neon-api/dist/sdk/models/operations";
import {
  BranchState,
  EndpointPoolerMode,
  EndpointState,
  EndpointType,
  OperationAction,
  OperationStatus,
  Provisioner,
} from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.createProjectBranch({
  branchCreateRequest: {
    branch: {
      name: "Stuart Stiedemann",
      parentId: "vel",
      parentLsn: "error",
      parentTimestamp: new Date("2022-03-26T09:37:56.283Z"),
    },
    endpoints: [
      {
        autoscalingLimitMaxCu: 2975.34,
        autoscalingLimitMinCu: 8917.73,
        provisioner: Provisioner.K8sPod,
        suspendTimeoutSeconds: 963663,
        type: EndpointType.ReadOnly,
      },
      {
        autoscalingLimitMaxCu: 3834.41,
        autoscalingLimitMinCu: 4776.65,
        provisioner: Provisioner.K8sNeonvm,
        suspendTimeoutSeconds: 812169,
        type: EndpointType.ReadWrite,
      },
    ],
  },
  projectId: "iusto",
}).then((res: CreateProjectBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createProjectBranchDatabase

Creates a database in the specified branch.
A branch can have multiple databases.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateProjectBranchDatabaseResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.createProjectBranchDatabase({
  databaseCreateRequest: {
    database: {
      name: "Charlie Walsh II",
      ownerName: "veritatis",
    },
  },
  branchId: "deserunt",
  projectId: "perferendis",
}).then((res: CreateProjectBranchDatabaseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createProjectBranchRole

Creates a role in the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Manage users](https://neon.tech/docs/manage/users/).

Connections established to the active read-write endpoint will be dropped.
If the read-write endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateProjectBranchRoleResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.createProjectBranchRole({
  roleCreateRequest: {
    role: {
      name: "Estelle Will",
    },
  },
  branchId: "at",
  projectId: "at",
}).then((res: CreateProjectBranchRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProjectBranch

Deletes the specified branch from a project, and places
all endpoints into an idle state, breaking existing client connections.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `branch_id` by listing the project's branches.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).

When a successful response status is received, the endpoints are still active,
and the branch is not yet deleted from storage.
The deletion occurs after all operations finish.
You cannot delete a branch if it is the only remaining branch in the project.
A project must have at least one branch.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { DeleteProjectBranchResponse } from "neon-api/dist/sdk/models/operations";
import { BranchState, OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.deleteProjectBranch({
  branchId: "maiores",
  projectId: "molestiae",
}).then((res: DeleteProjectBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProjectBranchDatabase

Deletes the specified database from the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { DeleteProjectBranchDatabaseResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.deleteProjectBranchDatabase({
  branchId: "quod",
  databaseName: "quod",
  projectId: "esse",
}).then((res: DeleteProjectBranchDatabaseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProjectBranchRole

Deletes the specified role from the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Managing users](https://neon.tech/docs/manage/users/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { DeleteProjectBranchRoleResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.deleteProjectBranchRole({
  branchId: "totam",
  projectId: "porro",
  roleName: "dolorum",
}).then((res: DeleteProjectBranchRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBranch

Retrieves information about the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `branch_id` by listing the project's branches.
A `branch_id` value has a `br-` prefix.

Each Neon project has a root branch named `main`.
A project may contain child branches that were branched from `main` or from another branch.
A parent branch is identified by a `parent_id` value, which is the `id` of the parent branch.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectBranchResponse } from "neon-api/dist/sdk/models/operations";
import { BranchState } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.getProjectBranch({
  branchId: "dicta",
  projectId: "nam",
}).then((res: GetProjectBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBranchDatabase

Retrieves information about the specified database.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectBranchDatabaseResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.getProjectBranchDatabase({
  branchId: "officia",
  databaseName: "occaecati",
  projectId: "fugit",
}).then((res: GetProjectBranchDatabaseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBranchRole

Retrieves details about the specified role.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Managing users](https://neon.tech/docs/manage/users/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectBranchRoleResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.getProjectBranchRole({
  branchId: "deleniti",
  projectId: "hic",
  roleName: "optio",
}).then((res: GetProjectBranchRoleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBranchRolePassword

Retrieves password of the specified role if possible.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Managing users](https://neon.tech/docs/manage/users/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectBranchRolePasswordResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.getProjectBranchRolePassword({
  branchId: "totam",
  projectId: "beatae",
  roleName: "commodi",
}).then((res: GetProjectBranchRolePasswordResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listProjectBranchDatabases

Retrieves a list of databases for the specified branch.
A branch can have multiple databases.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectBranchDatabasesResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.listProjectBranchDatabases({
  branchId: "molestiae",
  projectId: "modi",
}).then((res: ListProjectBranchDatabasesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listProjectBranchEndpoints

Retrieves a list of endpoints for the specified branch.
Currently, Neon permits only one endpoint per branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectBranchEndpointsResponse } from "neon-api/dist/sdk/models/operations";
import { EndpointPoolerMode, EndpointState, EndpointType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.listProjectBranchEndpoints({
  branchId: "qui",
  projectId: "impedit",
}).then((res: ListProjectBranchEndpointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listProjectBranchRoles

Retrieves a list of roles from the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Manage users](https://neon.tech/docs/manage/users/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectBranchRolesResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.listProjectBranchRoles({
  branchId: "cum",
  projectId: "esse",
}).then((res: ListProjectBranchRolesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listProjectBranches

Retrieves a list of branches for the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.

Each Neon project has a root branch named `main`.
A `branch_id` value has a `br-` prefix.
A project may contain child branches that were branched from `main` or from another branch.
A parent branch is identified by the `parent_id` value, which is the `id` of the parent branch.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectBranchesResponse } from "neon-api/dist/sdk/models/operations";
import { BranchState } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.listProjectBranches({
  projectId: "ipsum",
}).then((res: ListProjectBranchesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## resetProjectBranchRolePassword

Resets the password for the specified role.
Returns a new password and operations. The new password is ready to use when the last operation finishes.
The old password remains valid until last operation finishes.
Connections to the read-write endpoint are dropped. If idle,
the read-write endpoint becomes active for a short period of time.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Managing users](https://neon.tech/docs/manage/users/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ResetProjectBranchRolePasswordResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.resetProjectBranchRolePassword({
  branchId: "excepturi",
  projectId: "aspernatur",
  roleName: "perferendis",
}).then((res: ResetProjectBranchRolePasswordResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setPrimaryProjectBranch

The primary mark is automatically removed from the previous primary branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { SetPrimaryProjectBranchResponse } from "neon-api/dist/sdk/models/operations";
import { BranchState, OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.setPrimaryProjectBranch({
  branchId: "ad",
  projectId: "natus",
}).then((res: SetPrimaryProjectBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateProjectBranch

Updates the specified branch. Only changing the branch name is supported.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { UpdateProjectBranchResponse } from "neon-api/dist/sdk/models/operations";
import { BranchState, OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.updateProjectBranch({
  branchUpdateRequest: {
    branch: {
      name: "Sheryl Fadel",
    },
  },
  branchId: "hic",
  projectId: "saepe",
}).then((res: UpdateProjectBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateProjectBranchDatabase

Updates the specified database in the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing the branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { UpdateProjectBranchDatabaseResponse } from "neon-api/dist/sdk/models/operations";
import { OperationAction, OperationStatus } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.branch.updateProjectBranchDatabase({
  databaseUpdateRequest: {
    database: {
      name: "Harvey Hessel",
      ownerName: "saepe",
    },
  },
  branchId: "quidem",
  databaseName: "architecto",
  projectId: "ipsa",
}).then((res: UpdateProjectBranchDatabaseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
