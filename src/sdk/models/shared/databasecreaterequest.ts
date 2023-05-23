/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class DatabaseCreateRequestDatabase extends SpeakeasyBase {
  /**
   * The name of the datbase
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The name of the role that owns the database
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner_name" })
  ownerName: string;
}

export class DatabaseCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "database" })
  @Type(() => DatabaseCreateRequestDatabase)
  database: DatabaseCreateRequestDatabase;
}
