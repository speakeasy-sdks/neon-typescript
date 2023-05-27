/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListProjectOperationsRequest extends SpeakeasyBase {
    /**
     * Specify the cursor value from the previous response to get the next batch of operations
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * Specify a value from 1 to 1000 to limit number of operations in the response
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * The Neon project ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
    projectId: string;
}

/**
 * Returned a list of operations
 *
 * @remarks
 *
 */
export class ListProjectOperations200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Operation })
    @Expose({ name: "operations" })
    @Type(() => shared.Operation)
    operations: shared.Operation[];

    /**
     * Cursor based pagination is used. The user must pass the cursor as is to the backend.
     *
     * @remarks
     * For more information about cursor based pagination, see
     * https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pagination" })
    @Type(() => shared.Pagination)
    pagination?: shared.Pagination;
}

export class ListProjectOperationsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General Error
     */
    @SpeakeasyMetadata()
    generalError?: shared.GeneralError;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Returned a list of operations
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    listProjectOperations200ApplicationJSONObject?: ListProjectOperations200ApplicationJSON;
}
