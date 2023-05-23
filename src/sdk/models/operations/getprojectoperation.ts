/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetProjectOperationRequest extends SpeakeasyBase {
  /**
   * The operation ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=operation_id",
  })
  operationId: string;

  /**
   * The Neon project ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project_id",
  })
  projectId: string;
}

export class GetProjectOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * General Error
   */
  @SpeakeasyMetadata()
  generalError?: shared.GeneralError;

  /**
   * Returned details for the specified operation
   */
  @SpeakeasyMetadata()
  operationResponse?: shared.OperationResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
