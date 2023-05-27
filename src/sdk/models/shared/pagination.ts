/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Cursor based pagination is used. The user must pass the cursor as is to the backend.
 *
 * @remarks
 * For more information about cursor based pagination, see
 * https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination
 *
 */
export class Pagination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cursor" })
    cursor: string;
}
