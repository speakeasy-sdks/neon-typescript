# neon-api

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/neon-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/neon-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { NeonApi } from "neon-api";
import { CreateApiKeyResponse } from "neon-api/dist/sdk/models/operations";

const sdk = new NeonApi({
  security: {
    bearerAuth: "",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiKey](docs/sdks/apikey/README.md)

* [createApiKey](docs/sdks/apikey/README.md#createapikey) - Create an API key
* [listApiKeys](docs/sdks/apikey/README.md#listapikeys) - Get a list of API keys
* [revokeApiKey](docs/sdks/apikey/README.md#revokeapikey) - Revoke an API key

### [branch](docs/sdks/branch/README.md)

* [createProjectBranch](docs/sdks/branch/README.md#createprojectbranch) - Create a branch
* [createProjectBranchDatabase](docs/sdks/branch/README.md#createprojectbranchdatabase) - Create a database
* [createProjectBranchRole](docs/sdks/branch/README.md#createprojectbranchrole) - Create a role
* [deleteProjectBranch](docs/sdks/branch/README.md#deleteprojectbranch) - Delete a branch
* [deleteProjectBranchDatabase](docs/sdks/branch/README.md#deleteprojectbranchdatabase) - Delete a database
* [deleteProjectBranchRole](docs/sdks/branch/README.md#deleteprojectbranchrole) - Delete a role
* [getProjectBranch](docs/sdks/branch/README.md#getprojectbranch) - Get branch details
* [getProjectBranchDatabase](docs/sdks/branch/README.md#getprojectbranchdatabase) - Get database details
* [getProjectBranchRole](docs/sdks/branch/README.md#getprojectbranchrole) - Get role details
* [getProjectBranchRolePassword](docs/sdks/branch/README.md#getprojectbranchrolepassword) - Get role password
* [listProjectBranchDatabases](docs/sdks/branch/README.md#listprojectbranchdatabases) - Get a list of databases
* [listProjectBranchEndpoints](docs/sdks/branch/README.md#listprojectbranchendpoints) - Get a list of branch endpoints
* [listProjectBranchRoles](docs/sdks/branch/README.md#listprojectbranchroles) - Get a list of roles
* [listProjectBranches](docs/sdks/branch/README.md#listprojectbranches) - Get a list of branches
* [resetProjectBranchRolePassword](docs/sdks/branch/README.md#resetprojectbranchrolepassword) - Reset the role password
* [setPrimaryProjectBranch](docs/sdks/branch/README.md#setprimaryprojectbranch) - Set the branch as the primary branch of a project
* [updateProjectBranch](docs/sdks/branch/README.md#updateprojectbranch) - Update a branch
* [updateProjectBranchDatabase](docs/sdks/branch/README.md#updateprojectbranchdatabase) - Update a database

### [endpoint](docs/sdks/endpoint/README.md)

* [createProjectEndpoint](docs/sdks/endpoint/README.md#createprojectendpoint) - Create an endpoint
* [deleteProjectEndpoint](docs/sdks/endpoint/README.md#deleteprojectendpoint) - Delete an endpoint
* [getProjectEndpoint](docs/sdks/endpoint/README.md#getprojectendpoint) - Get an endpoint
* [listProjectEndpoints](docs/sdks/endpoint/README.md#listprojectendpoints) - Get a list of endpoints
* [startProjectEndpoint](docs/sdks/endpoint/README.md#startprojectendpoint) - Start an endpoint
* [suspendProjectEndpoint](docs/sdks/endpoint/README.md#suspendprojectendpoint) - Suspend an endpoint
* [updateProjectEndpoint](docs/sdks/endpoint/README.md#updateprojectendpoint) - Update an endpoint

### [operation](docs/sdks/operation/README.md)

* [getProjectOperation](docs/sdks/operation/README.md#getprojectoperation) - Get operation details
* [listProjectOperations](docs/sdks/operation/README.md#listprojectoperations) - Get a list of operations

### [preview](docs/sdks/preview/README.md)

* [listProjectsConsumption](docs/sdks/preview/README.md#listprojectsconsumption) - Get a list of projects consumption

### [project](docs/sdks/project/README.md)

* [createProject](docs/sdks/project/README.md#createproject) - Create a project
* [deleteProject](docs/sdks/project/README.md#deleteproject) - Delete a project
* [getProject](docs/sdks/project/README.md#getproject) - Get project details
* [listProjects](docs/sdks/project/README.md#listprojects) - Get a list of projects
* [updateProject](docs/sdks/project/README.md#updateproject) - Update a project
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

