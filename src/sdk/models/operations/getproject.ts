/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetProjectRequest extends SpeakeasyBase {
    /**
     * The Neon project ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
    projectId: string;
}

export class GetProjectResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General Error
     */
    @SpeakeasyMetadata()
    generalError?: shared.GeneralError;

    /**
     * Returned information about the specified project
     */
    @SpeakeasyMetadata()
    projectResponse?: shared.ProjectResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
