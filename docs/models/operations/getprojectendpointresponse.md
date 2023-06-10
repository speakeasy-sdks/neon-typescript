# GetProjectEndpointResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `endpointResponse`                                                 | [shared.EndpointResponse](../../models/shared/endpointresponse.md) | :heavy_minus_sign:                                                 | Returned information about the specified endpoint                  |
| `generalError`                                                     | [shared.GeneralError](../../models/shared/generalerror.md)         | :heavy_minus_sign:                                                 | General Error                                                      |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse>](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                 | N/A                                                                |