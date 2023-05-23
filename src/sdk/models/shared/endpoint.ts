/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EndpointPoolerMode } from "./endpointpoolermode";
import { EndpointSettingsData } from "./endpointsettingsdata";
import { EndpointState } from "./endpointstate";
import { EndpointType } from "./endpointtype";
import { Provisioner } from "./provisioner";
import { Expose, Transform, Type } from "class-transformer";

export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "autoscaling_limit_max_cu" })
  autoscalingLimitMaxCu: number;

  @SpeakeasyMetadata()
  @Expose({ name: "autoscaling_limit_min_cu" })
  autoscalingLimitMinCu: number;

  /**
   * The ID of the branch that the compute endpoint is associated with
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch_id" })
  branchId: string;

  /**
   * A timestamp indicating when the compute endpoint was created
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * The compute endpoint creation source
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "creation_source" })
  creationSource: string;

  /**
   * The state of the compute endpoint
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_state" })
  currentState: EndpointState;

  /**
   * Whether to restrict connections to the compute endpoint
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disabled" })
  disabled: boolean;

  /**
   * The hostname of the compute endpoint. This is the hostname specified when connecting to a Neon database.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "host" })
  host: string;

  /**
   * The compute endpoint ID. Compute endpoint IDs have an `ep-` prefix. For example: `ep-little-smoke-851426`
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * A timestamp indicating when the compute endpoint was last active
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_active" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastActive?: Date;

  /**
   * Whether to permit passwordless access to the compute endpoint
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "passwordless_access" })
  passwordlessAccess: boolean;

  /**
   * The state of the compute endpoint
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pending_state" })
  pendingState?: EndpointState;

  /**
   * Whether connection pooling is enabled for the compute endpoint
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pooler_enabled" })
  poolerEnabled: boolean;

  /**
   * The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pooler_mode" })
  poolerMode: EndpointPoolerMode;

  /**
   * The ID of the project to which the compute endpoint belongs
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project_id" })
  projectId: string;

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
   * DEPRECATED. Use the "host" property instead.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "proxy_host" })
  proxyHost: string;

  /**
   * The region identifier
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region_id" })
  regionId: string;

  /**
   * A collection of settings for a compute endpoint
   */
  @SpeakeasyMetadata()
  @Expose({ name: "settings" })
  @Type(() => EndpointSettingsData)
  settings: EndpointSettingsData;

  /**
   * Duration of inactivity in seconds after which endpoint will be
   *
   * @remarks
   * automatically suspended. Value `0` means use global default,
   * `-1` means never suspend. Maximum value is 1 week in seconds.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "suspend_timeout_seconds" })
  suspendTimeoutSeconds: number;

  /**
   * The compute endpoint type. Either `read_write` or `read_only`.
   *
   * @remarks
   * The `read_only` compute endpoint type is not yet supported.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: EndpointType;

  /**
   * A timestamp indicating when the compute endpoint was last updated
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}
