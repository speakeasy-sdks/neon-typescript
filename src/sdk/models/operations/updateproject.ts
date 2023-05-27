/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateProjectRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    projectUpdateRequest: shared.ProjectUpdateRequest;

    /**
     * The Neon project ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
    projectId: string;
}

export class UpdateProjectResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General Error
     */
    @SpeakeasyMetadata()
    generalError?: shared.GeneralError;

    /**
     * Updated the specified project
     */
    @SpeakeasyMetadata()
    projectOperations?: shared.ProjectOperations;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
