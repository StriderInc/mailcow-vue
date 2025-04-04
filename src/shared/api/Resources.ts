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

export class Resources<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create Resources.
   *
   * @tags Resources
   * @name CreateResources
   * @summary Create Resources
   * @request POST:/api/v1/add/resource
   * @secure
   */
  createResources = (
    data: {
      /** 1 for a active transport map 0 for a disabled transport map */
      active?: number;
      /** a description of the resource */
      description?: string;
      /** the domain for which the resource should be */
      domain?: string;
      /** the kind of recouse */
      kind?: "location" | "group" | "thing";
      multiple_bookings?: "-1" | "1" | "custom";
      /** always empty */
      multiple_bookings_custom?: number;
      multiple_bookings_select?: "-1" | "1" | "custom";
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
      path: `/api/v1/add/resource`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a Resources, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Resources
   * @name DeleteResources
   * @summary Delete Resources
   * @request POST:/api/v1/delete/resource
   * @secure
   */
  deleteResources = (
    data: {
      /** contains list of Resources you want to delete */
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
      path: `/api/v1/delete/resource`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all Resources.
   *
   * @tags Resources
   * @name GetResources
   * @summary Get Resources
   * @request GET:/api/v1/get/resource/all
   * @secure
   */
  getResources = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/resource/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
