/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DefaultEndpointSettings } from "./defaultendpointsettings";
import { ProjectOwnerData } from "./projectownerdata";
import { ProjectSettingsData } from "./projectsettingsdata";
import { Provisioner } from "./provisioner";
import { Expose, Transform, Type } from "class-transformer";

export class Project extends SpeakeasyBase {
  /**
   * Seconds. Control plane observed endpoints of this project being active this amount of wall-clock time.
   *
   * @remarks
   * The value has some lag.
   * The value is reset at the beginning of each billing period.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active_time_seconds" })
  activeTimeSeconds: number;

  /**
   * The logical size limit for a branch. The value is in MiB.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch_logical_size_limit" })
  branchLogicalSizeLimit: number;

  /**
   * The logical size limit for a branch. The value is in B.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch_logical_size_limit_bytes" })
  branchLogicalSizeLimitBytes: number;

  /**
   * Seconds. The number of CPU seconds used by the project's compute endpoints, including compute endpoints that have been deleted.
   *
   * @remarks
   * The value has some lag. The value is reset at the beginning of each billing period.
   * Examples:
   * 1. An endpoint that uses 1 CPU for 1 second is equal to `compute_time=1`.
   * 2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `compute_time=2`.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "compute_time_seconds" })
  computeTimeSeconds: number;

  /**
   * A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "consumption_period_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  consumptionPeriodEnd: Date;

  /**
   * A date-time indicating when Neon Cloud started measuring consumption for current consumption period.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "consumption_period_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  consumptionPeriodStart: Date;

  /**
   * DEPRECATED, use compute_time instead.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cpu_used_sec" })
  cpuUsedSec: number;

  /**
   * A timestamp indicating when the project was created
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The project creation source
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "creation_source" })
  creationSource: string;

  /**
   * Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.
   *
   * @remarks
   * The value is reset at the beginning of each billing period.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data_storage_bytes_hour" })
  dataStorageBytesHour: number;

  /**
   * Bytes. Egress traffic from the Neon cloud to the client for given project over the billing period.
   *
   * @remarks
   * Includes deleted endpoints. The value has some lag. The value is reset at the beginning of each billing period.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data_transfer_bytes" })
  dataTransferBytes: number;

  /**
   * A collection of settings for a Neon endpoint
   */
  @SpeakeasyMetadata()
  @Expose({ name: "default_endpoint_settings" })
  @Type(() => DefaultEndpointSettings)
  defaultEndpointSettings?: DefaultEndpointSettings;

  /**
   * The number of seconds to retain PITR backup history for this project.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "history_retention_seconds" })
  historyRetentionSeconds: number;

  /**
   * The project ID
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maintenance_starts_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maintenanceStartsAt?: Date;

  /**
   * The project name
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  @Type(() => ProjectOwnerData)
  owner?: ProjectOwnerData;

  @SpeakeasyMetadata()
  @Expose({ name: "owner_id" })
  ownerId: string;

  /**
   * The major PostgreSQL version number. Currently supported version are `14` and `15`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pg_version" })
  pgVersion: number;

  /**
   * The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "platform_id" })
  platformId: string;

  /**
   * The Neon compute provisioner.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "provisioner" })
  provisioner: Provisioner;

  /**
   * The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "proxy_host" })
  proxyHost: string;

  /**
   * DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.
   *
   * @remarks
   * A timestamp indicating when the project quota resets
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quota_reset_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  quotaResetAt?: Date;

  /**
   * The region identifier
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region_id" })
  regionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "settings" })
  @Type(() => ProjectSettingsData)
  settings?: ProjectSettingsData;

  /**
   * Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "store_passwords" })
  storePasswords: boolean;

  /**
   * Experimental. Do not use this field yet.
   *
   * @remarks
   * The data storage size in bytes.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "synthetic_storage_size" })
  syntheticStorageSize?: number;

  /**
   * A timestamp indicating when the project was last updated
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  /**
   * Bytes. Amount of WAL that travelled through storage for given project across all branches.
   *
   * @remarks
   * The value has some lag. The value is reset at the beginning of each billing period.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "written_data_bytes" })
  writtenDataBytes: number;
}
