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

export class FordwardingHosts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Add a new Forwarding host to mailcow. You can chose to enable or disable spam filtering of incoming emails by specifing `filter_spam` 0 = inactive, 1 = active.
   *
   * @tags Fordwarding Hosts
   * @name AddForwardHost
   * @summary Add Forward Host
   * @request POST:/api/v1/add/fwdhost
   * @secure
   */
  addForwardHost = (
    data: {
      /** 1 to enable spam filter, 0 to disable spam filter */
      filter_spam?: number;
      /** contains the hostname you want to add */
      hostname?: string;
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
      path: `/api/v1/add/fwdhost`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a forwarding host, in order to do so you need to know the IP of the host.
   *
   * @tags Fordwarding Hosts
   * @name DeleteForwardHost
   * @summary Delete Forward Host
   * @request POST:/api/v1/delete/fwdhost
   * @secure
   */
  deleteForwardHost = (
    data: {
      /** contains the ip of the fowarding host you want to delete */
      ip?: string;
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
      path: `/api/v1/delete/fwdhost`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all Forwarding Hosts in your mailcow.
   *
   * @tags Fordwarding Hosts
   * @name GetForwardingHosts
   * @summary Get Forwarding Hosts
   * @request GET:/api/v1/get/fwdhost/all
   * @secure
   */
  getForwardingHosts = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/fwdhost/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
