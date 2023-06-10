# GetProjectOperationResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `generalError`                                                       | [shared.GeneralError](../../models/shared/generalerror.md)           | :heavy_minus_sign:                                                   | General Error                                                        |
| `operationResponse`                                                  | [shared.OperationResponse](../../models/shared/operationresponse.md) | :heavy_minus_sign:                                                   | Returned details for the specified operation                         |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |