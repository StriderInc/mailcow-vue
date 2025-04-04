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

export class Fail2Ban<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can edit the Fail2Ban config and black or whitelist new ips.
   *
   * @tags Fail2Ban
   * @name EditFail2Ban
   * @summary Edit Fail2Ban
   * @request POST:/api/v1/edit/fail2ban
   * @secure
   */
  editFail2Ban = (
    data: {
      /** array containing the fail2ban settings */
      attr?: {
        /** the backlisted ips or hostnames separated by comma */
        backlist?: string;
        /** the time an ip should be banned */
        ban_time?: number;
        /** if the time of the ban should increase each time */
        ban_time_increment?: boolean;
        /** the maximum numbe of wrong logins before a ip is banned */
        max_attempts?: number;
        /** the maximum time an ip should be banned */
        max_ban_time?: number;
        /** the networks mask to ban for ipv4 */
        netban_ipv4?: number;
        /** the networks mask to ban for ipv6 */
        netban_ipv6?: number;
        /** the maximum time in which a ip as to login with false credentials to be banned */
        retry_window?: number;
        /** whitelisted ips or hostnames sepereated by comma */
        whitelist?: string;
      };
      /** has to be none */
      items?: any;
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
      path: `/api/v1/edit/fail2ban`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the current Fail2Ban configuration.
   *
   * @tags Fail2Ban
   * @name GetFail2BanConfig
   * @summary Get Fail2Ban Config
   * @request GET:/api/v1/get/fail2ban
   * @secure
   */
  getFail2BanConfig = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/fail2ban`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
