# StartProjectEndpointResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `endpointOperations`                                                   | [shared.EndpointOperations](../../models/shared/endpointoperations.md) | :heavy_minus_sign:                                                     | Started the specified endpoint                                         |
| `generalError`                                                         | [shared.GeneralError](../../models/shared/generalerror.md)             | :heavy_minus_sign:                                                     | General Error                                                          |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `rawResponse`                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                     | N/A                                                                    |