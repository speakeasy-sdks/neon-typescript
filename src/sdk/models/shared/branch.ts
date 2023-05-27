/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BranchState } from "./branchstate";
import { Expose, Transform } from "class-transformer";

export class Branch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "active_time_seconds" })
    activeTimeSeconds: number;

    @SpeakeasyMetadata()
    @Expose({ name: "compute_time_seconds" })
    computeTimeSeconds: number;

    /**
     * CPU seconds used by all the endpoints of the branch, including deleted ones.
     *
     * @remarks
     * This value is reset at the beginning of each billing period.
     * Examples:
     * 1. A branch that uses 1 CPU for 1 second is equal to `cpu_used_sec=1`.
     * 2. A branch that uses 2 CPUs simultaneously for 1 second is equal to `cpu_used_sec=2`.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cpu_used_sec" })
    cpuUsedSec: number;

    /**
     * A timestamp indicating when the branch was created
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The branch creation source
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "creation_source" })
    creationSource: string;

    /**
     * The branch state
     */
    @SpeakeasyMetadata()
    @Expose({ name: "current_state" })
    currentState: BranchState;

    @SpeakeasyMetadata()
    @Expose({ name: "data_transfer_bytes" })
    dataTransferBytes: number;

    /**
     * The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The logical size of the branch, in bytes
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logical_size" })
    logicalSize?: number;

    /**
     * The branch name
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The `branch_id` of the parent branch
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    /**
     * The Log Sequence Number (LSN) on the parent branch from which this branch was created
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parent_lsn" })
    parentLsn?: string;

    /**
     * The point in time on the parent branch from which this branch was created
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parent_timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    parentTimestamp?: Date;

    /**
     * The branch state
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pending_state" })
    pendingState?: BranchState;

    /**
     * Whether the branch is the project's primary branch
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "primary" })
    primary: boolean;

    /**
     * The ID of the project to which the branch belongs
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId: string;

    /**
     * A timestamp indicating when the branch was last updated
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "written_data_bytes" })
    writtenDataBytes: number;
}
