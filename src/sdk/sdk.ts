/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { APIKey } from "./apikey";
import { Branch } from "./branch";
import { Endpoint } from "./endpoint";
import * as shared from "./models/shared";
import { Operation } from "./operation";
import { Preview } from "./preview";
import { Project } from "./project";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://console.neon.tech/api/v2"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * The Neon API allows you to access and manage Neon programmatically. You can use the Neon API to manage API keys, projects, branches, endpoints, databases, roles, and operations. For information about these features, refer to the [Neon documentation](https://neon.tech/docs/manage/overview/).
 *
 * @remarks
 *
 * You can run Neon API requests from this API reference using the **Try it out** feature that is provided for each method. Click **Authorize** to enter an API key.
 *
 * You can create and manage API keys in the Neon Console. See [Manage API keys](https://neon.tech/docs/manage/api-keys/) for instructions.
 */
export class NeonApi {
  /**
   * These methods allow you to create and manage API keys for your Neon account. For related information, see [Manage API keys](https://neon.tech/docs/manage/api-keys).
   */
  public apiKey: APIKey;
  /**
   * These methods allow you to create and manage branches in your Neon project. For related information, see [Manage branches](https://neon.tech/docs/manage/branches).
   */
  public branch: Branch;
  /**
   * These methods allow you to create and manage compute endpoints in your Neon project. For related information, see [Manage compute endpoints](https://neon.tech/docs/manage/endpoints).
   */
  public endpoint: Endpoint;
  /**
   * These methods allow you to view operation details for your Neon project. For related information, see [Operations](https://neon.tech/docs/manage/operations).
   */
  public operation: Operation;
  /**
   * New API methods that are in Beta / Preview state and could be subjected to significant changes in the future.
   */
  public preview: Preview;
  /**
   * These methods allow you to create and manage Neon projects. For related information, see [Manage projects](https://neon.tech/docs/manage/projects).
   */
  public project: Project;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.0.0";
  private _genVersion = "2.32.2";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.apiKey = new APIKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.branch = new Branch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.endpoint = new Endpoint(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.operation = new Operation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.preview = new Preview(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.project = new Project(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
