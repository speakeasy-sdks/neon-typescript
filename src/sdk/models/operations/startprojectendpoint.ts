/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class StartProjectEndpointRequest extends SpeakeasyBase {
  /**
   * The endpoint ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=endpoint_id",
  })
  endpointId: string;

  /**
   * The Neon project ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project_id",
  })
  projectId: string;
}

export class StartProjectEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Started the specified endpoint
   */
  @SpeakeasyMetadata()
  endpointOperations?: shared.EndpointOperations;

  /**
   * General Error
   */
  @SpeakeasyMetadata()
  generalError?: shared.GeneralError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
