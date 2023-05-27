/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Created a project.
 *
 * @remarks
 * The project includes a connection URI with a database, password, and role.
 * At least one non-protected role is created with a password.
 * Wait until the operations are finished before attempting to connect to a project database.
 *
 */
export class CreateProject201ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    @Type(() => shared.Branch)
    branch: shared.Branch;

    @SpeakeasyMetadata({ elemType: shared.ConnectionDetails })
    @Expose({ name: "connection_uris" })
    @Type(() => shared.ConnectionDetails)
    connectionUris: shared.ConnectionDetails[];

    @SpeakeasyMetadata({ elemType: shared.Database })
    @Expose({ name: "databases" })
    @Type(() => shared.Database)
    databases: shared.Database[];

    @SpeakeasyMetadata({ elemType: shared.Endpoint })
    @Expose({ name: "endpoints" })
    @Type(() => shared.Endpoint)
    endpoints: shared.Endpoint[];

    @SpeakeasyMetadata({ elemType: shared.Operation })
    @Expose({ name: "operations" })
    @Type(() => shared.Operation)
    operations: shared.Operation[];

    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => shared.Project)
    project: shared.Project;

    @SpeakeasyMetadata({ elemType: shared.Role })
    @Expose({ name: "roles" })
    @Type(() => shared.Role)
    roles: shared.Role[];
}

export class CreateProjectResponse extends SpeakeasyBase {
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
     * Created a project.
     *
     * @remarks
     * The project includes a connection URI with a database, password, and role.
     * At least one non-protected role is created with a password.
     * Wait until the operations are finished before attempting to connect to a project database.
     *
     */
    @SpeakeasyMetadata()
    createProject201ApplicationJSONObject?: CreateProject201ApplicationJSON;
}
