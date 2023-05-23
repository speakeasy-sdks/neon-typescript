/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProjectQuota } from "./projectquota";
import { Expose, Type } from "class-transformer";

export class ProjectSettingsData extends SpeakeasyBase {
  /**
   * Per-project consumption quota. If quota is exceeded, then all active computes
   *
   * @remarks
   * will be automatically suspended and it won't be possible to start them neither
   * with API method call or with incoming proxy connections. The only exception is
   * `logical_size_bytes`, which is applied on per-branch basis, i.e. only compute
   * on the branch with `logical_size` exceeding quota will be suspended.
   *
   * Quotas are enforced based on per-project consumption metrics with the same names,
   * which are reset at the end of each billing period (first day of the month).
   * Logical size is also an exception here, as it represents the total size of data
   * stored in some branch, so it's not reset.
   *
   * Zero quota value or empty mean 'unlimited'.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quota" })
  @Type(() => ProjectQuota)
  quota?: ProjectQuota;
}
