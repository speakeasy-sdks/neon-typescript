# ListProjectBranchRolesResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `generalError`                                               | [shared.GeneralError](../../models/shared/generalerror.md)   | :heavy_minus_sign:                                           | General Error                                                |
| `rolesResponse`                                              | [shared.RolesResponse](../../models/shared/rolesresponse.md) | :heavy_minus_sign:                                           | Returned a list of roles from the specified branch.          |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse>](https://axios-http.com/docs/res_schema)     | :heavy_minus_sign:                                           | N/A                                                          |