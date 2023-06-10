# GetProjectBranchRoleResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `generalError`                                             | [shared.GeneralError](../../models/shared/generalerror.md) | :heavy_minus_sign:                                         | General Error                                              |
| `roleResponse`                                             | [shared.RoleResponse](../../models/shared/roleresponse.md) | :heavy_minus_sign:                                         | Successfully returned details for the specified role       |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse>](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                         | N/A                                                        |