/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListApiKeysResponse extends SpeakeasyBase {
    /**
     * Returned the API keys for the Neon account
     */
    @SpeakeasyMetadata({ elemType: shared.ApiKeysListResponseItem })
    apiKeysListResponseItems?: shared.ApiKeysListResponseItem[];

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
}
