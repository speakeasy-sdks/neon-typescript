/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ApiKeysListResponseItem extends SpeakeasyBase {
  /**
   * A timestamp indicating when the API key was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

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
}
