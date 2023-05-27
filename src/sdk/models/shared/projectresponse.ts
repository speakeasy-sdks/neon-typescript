/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Project } from "./project";
import { Expose, Type } from "class-transformer";

/**
 * Deleted the specified project
 */
export class ProjectResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => Project)
    project: Project;
}
