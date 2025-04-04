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

export class Dkim<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can generate new DKIM keys.
   *
   * @tags DKIM
   * @name GenerateDkimKey
   * @summary Generate DKIM Key
   * @request POST:/api/v1/add/dkim
   * @secure
   */
  generateDkimKey = (
    data: {
      /** the DKIM selector default dkim */
      dkim_selector?: string;
      /** a list of domains for which a dkim key should be generated */
      domains?: string;
      /** the key size (1024, 2048, 3072 or 4096) */
      key_size?: number;
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
      path: `/api/v1/add/dkim`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can duplicate the DKIM Key of one domain.
   *
   * @tags DKIM
   * @name DuplicateDkimKey
   * @summary Duplicate DKIM Key
   * @request POST:/api/v1/add/dkim_duplicate
   * @secure
   */
  duplicateDkimKey = (
    data: {
      /** the domain where the dkim key should be copied from */
      fron_domain?: string;
      /** the domain where the dkim key should be copied to */
      to_domain?: string;
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
      path: `/api/v1/add/dkim_duplicate`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint a existing DKIM Key can be deleted
   *
   * @tags DKIM
   * @name DeleteDkimKey
   * @summary Delete DKIM Key
   * @request POST:/api/v1/delete/dkim
   * @secure
   */
  deleteDkimKey = (data: string[], params: RequestParams = {}) =>
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
      path: `/api/v1/delete/dkim`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get the DKIM public key for a specific domain.
   *
   * @tags DKIM
   * @name GetDkimKey
   * @summary Get DKIM Key
   * @request GET:/api/v1/get/dkim/{domain}
   * @secure
   */
  getDkimKey = (domain: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/dkim/${domain}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
