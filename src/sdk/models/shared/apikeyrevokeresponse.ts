/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Revoked the specified API key
 */
export class ApiKeyRevokeResponse extends SpeakeasyBase {
    /**
     * The API key ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    /**
     * A timestamp indicating when the API was last used
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_used_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    lastUsedAt?: Date;

    /**
     * The IP address from which the API key was last used
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_used_from_addr" })
    lastUsedFromAddr: string;

    /**
     * The user-specified API key name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * A `true` or `false` value indicating whether the API key is revoked
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revoked" })
    revoked: boolean;
}
