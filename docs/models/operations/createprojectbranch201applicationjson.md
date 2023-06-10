# CreateProjectBranch201ApplicationJSON

Created a branch. An endpoint is only created if it was specified in the request.


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `branch`                                                               | [shared.Branch](../../models/shared/branch.md)                         | :heavy_check_mark:                                                     | N/A                                                                    |
| `connectionUris`                                                       | [shared.ConnectionDetails](../../models/shared/connectiondetails.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `endpoints`                                                            | [shared.Endpoint](../../models/shared/endpoint.md)[]                   | :heavy_check_mark:                                                     | N/A                                                                    |
| `operations`                                                           | [shared.Operation](../../models/shared/operation.md)[]                 | :heavy_check_mark:                                                     | N/A                                                                    |