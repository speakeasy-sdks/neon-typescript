/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteProjectBranchDatabaseRequest extends SpeakeasyBase {
  /**
   * The branch ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=branch_id",
  })
  branchId: string;

  /**
   * The database name
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=database_name",
  })
  databaseName: string;

  /**
   * The Neon project ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project_id",
  })
  projectId: string;
}

export class DeleteProjectBranchDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Deleted the specified database
   */
  @SpeakeasyMetadata()
  databaseOperations?: shared.DatabaseOperations;

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
