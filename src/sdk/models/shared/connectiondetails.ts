/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionParameters } from "./connectionparameters";
import { Expose, Type } from "class-transformer";

export class ConnectionDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connection_parameters" })
    @Type(() => ConnectionParameters)
    connectionParameters: ConnectionParameters;

    /**
     * Connection URI is same as specified in https://www.postgresql.org/docs/current/libpq-connect.html#id-1.7.3.8.3.6
     *
     * @remarks
     * It is a ready to use string for psql or for DATABASE_URL environment variable.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_uri" })
    connectionUri: string;
}
