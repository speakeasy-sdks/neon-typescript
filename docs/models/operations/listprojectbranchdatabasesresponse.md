# ListProjectBranchDatabasesResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `databasesResponse`                                                  | [shared.DatabasesResponse](../../models/shared/databasesresponse.md) | :heavy_minus_sign:                                                   | Returned a list of databases of the specified branch                 |
| `generalError`                                                       | [shared.GeneralError](../../models/shared/generalerror.md)           | :heavy_minus_sign:                                                   | General Error                                                        |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |