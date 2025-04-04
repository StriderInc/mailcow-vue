/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class OutgoingTlsPolicyMapOverrides<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create a TLS policy map override.
   *
   * @tags Outgoing TLS Policy Map Overrides
   * @name CreateTlsPolicyMap
   * @summary Create TLS Policy Map
   * @request POST:/api/v1/add/tls-policy-map
   * @secure
   */
  createTlsPolicyMap = (
    data: {
      /** custom parameters you find out more about them [here](http://www.postfix.org/postconf.5.html#smtp_tls_policy_maps) */
      parameters?: string;
      /** 1 for a active user status 0 for a disabled user status */
      active?: number;
      /** the target domain or email address */
      dest?: string;
      /** the policy */
      policy?: "none" | "may" | "encrypt" | "dane" | "'dane" | "fingerprint" | "verify" | "secure";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** contains request object */
        log?: any[];
        msg?: any[];
        type?: "success" | "danger" | "error";
      },
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/add/tls-policy-map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a TLS Policy Map, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Outgoing TLS Policy Map Overrides
   * @name DeleteTlsPolicyMap
   * @summary Delete TLS Policy Map
   * @request POST:/api/v1/delete/tls-policy-map
   * @secure
   */
  deleteTlsPolicyMap = (
    data: {
      /** contains list of tls policy maps you want to delete */
      items?: object;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** contains request object */
        log?: any[];
        msg?: any[];
        type?: "success" | "danger" | "error";
      },
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/delete/tls-policy-map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all TLS policy map override maps.
   *
   * @tags Outgoing TLS Policy Map Overrides
   * @name GetTlsPolicyMap
   * @summary Get TLS Policy Map
   * @request GET:/api/v1/get/tls-policy-map/{id}
   * @secure
   */
  getTlsPolicyMap = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/tls-policy-map/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
