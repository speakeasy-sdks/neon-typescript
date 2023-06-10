# DeleteProjectBranchRoleResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `contentType`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `generalError`                                                 | [shared.GeneralError](../../models/shared/generalerror.md)     | :heavy_minus_sign:                                             | General Error                                                  |
| `roleOperations`                                               | [shared.RoleOperations](../../models/shared/roleoperations.md) | :heavy_minus_sign:                                             | Deleted the specified role from the branch                     |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `rawResponse`                                                  | [AxiosResponse>](https://axios-http.com/docs/res_schema)       | :heavy_minus_sign:                                             | N/A                                                            |