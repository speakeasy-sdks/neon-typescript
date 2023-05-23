# project

## Overview

These methods allow you to create and manage Neon projects. For related information, see [Manage projects](https://neon.tech/docs/manage/projects).

### Available Operations

* [createProject](#createproject) - Create a project
* [deleteProject](#deleteproject) - Delete a project
* [getProject](#getproject) - Get project details
* [listProjects](#listprojects) - Get a list of projects
* [updateProject](#updateproject) - Update a project

## createProject

Creates a Neon project.
A project is the top-level object in the Neon object hierarchy.
Plan limits define how many projects you can create.
Neon's Free plan permits one project per Neon account.
For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).

You can specify a region and PostgreSQL version in the request body.
Neon currently supports PostgreSQL 14 and 15.
For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { CreateProjectResponse } from "neon-api/dist/sdk/models/operations";
import {
  BillingSubscriptionType,
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

sdk.project.createProject({
  project: {
    autoscalingLimitMaxCu: 3179.83,
    autoscalingLimitMinCu: 8804.76,
    branch: {
      databaseName: "commodi",
      name: "Eric Emmerich",
      roleName: "excepturi",
    },
    defaultEndpointSettings: {
      "modi": "praesentium",
      "rem": "voluptates",
      "quasi": "repudiandae",
      "sint": "veritatis",
    },
    name: "Miss Randall Hamill",
    pgVersion: 131797,
    provisioner: Provisioner.K8sNeonvm,
    regionId: "distinctio",
    settings: {
      quota: {
        activeTimeSeconds: 841386,
        computeTimeSeconds: 289406,
        dataTransferBytes: 264730,
        logicalSizeBytes: 183191,
        writtenDataBytes: 397821,
      },
    },
    storePasswords: false,
  },
}).then((res: CreateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProject

Deletes the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.
Deleting a project is a permanent action.
Deleting a project also deletes endpoints, branches, databases, and users that belong to the project.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { DeleteProjectResponse } from "neon-api/dist/sdk/models/operations";
import { BillingSubscriptionType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.deleteProject({
  projectId: "cupiditate",
}).then((res: DeleteProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProject

Retrieves information about the specified project.
A project is the top-level object in the Neon object hierarchy.
You can obtain a `project_id` by listing the projects for your Neon account.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { GetProjectResponse } from "neon-api/dist/sdk/models/operations";
import { BillingSubscriptionType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.getProject({
  projectId: "quos",
}).then((res: GetProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listProjects

Retrieves a list of projects for the Neon account.
A project is the top-level object in the Neon object hierarchy.
For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { ListProjectsResponse } from "neon-api/dist/sdk/models/operations";
import { BillingSubscriptionType, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.listProjects({
  cursor: "perferendis",
  limit: 164940,
}).then((res: ListProjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateProject

Updates the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.
Neon permits updating the project name only.


### Example Usage

```typescript
import { NeonApi } from "neon-api";
import { UpdateProjectResponse } from "neon-api/dist/sdk/models/operations";
import { BillingSubscriptionType, OperationAction, OperationStatus, Provisioner } from "neon-api/dist/sdk/models/shared";

const sdk = new NeonApi({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.updateProject({
  projectUpdateRequest: {
    project: {
      defaultEndpointSettings: {
        "ipsam": "alias",
        "fugit": "dolorum",
        "excepturi": "tempora",
        "facilis": "tempore",
      },
      name: "Lucia Kemmer",
      settings: {
        quota: {
          activeTimeSeconds: 576157,
          computeTimeSeconds: 396098,
          dataTransferBytes: 592042,
          logicalSizeBytes: 896039,
          writtenDataBytes: 572252,
        },
      },
    },
  },
  projectId: "officia",
}).then((res: UpdateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
