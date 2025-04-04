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

import { HttpClient, RequestParams } from "./http-client";

export class Logs<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This Api endpoint lists all ACME logs from issued Lets Enctypts certificates. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetAcmeLogs
   * @summary Get ACME logs
   * @request GET:/api/v1/get/logs/acme/{count}
   * @secure
   */
  getAcmeLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/acme/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Api logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetApiLogs
   * @summary Get Api logs
   * @request GET:/api/v1/get/logs/api/{count}
   * @secure
   */
  getApiLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/api/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Autodiscover logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetAutodiscoverLogs
   * @summary Get Autodiscover logs
   * @request GET:/api/v1/get/logs/autodiscover/{count}
   * @secure
   */
  getAutodiscoverLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/autodiscover/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Dovecot logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetDovecotLogs
   * @summary Get Dovecot logs
   * @request GET:/api/v1/get/logs/dovecot/{count}
   * @secure
   */
  getDovecotLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/dovecot/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Netfilter logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetNetfilterLogs
   * @summary Get Netfilter logs
   * @request GET:/api/v1/get/logs/netfilter/{count}
   * @secure
   */
  getNetfilterLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/netfilter/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Postfix logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetPostfixLogs
   * @summary Get Postfix logs
   * @request GET:/api/v1/get/logs/postfix/{count}
   * @secure
   */
  getPostfixLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/postfix/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Ratelimit logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetRatelimitLogs
   * @summary Get Ratelimit logs
   * @request GET:/api/v1/get/logs/ratelimited/{count}
   * @secure
   */
  getRatelimitLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/ratelimited/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Rspamd logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetRspamdLogs
   * @summary Get Rspamd logs
   * @request GET:/api/v1/get/logs/rspamd-history/{count}
   * @secure
   */
  getRspamdLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/rspamd-history/${count}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description This Api endpoint lists all SOGo logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetSoGoLogs
   * @summary Get SOGo logs
   * @request GET:/api/v1/get/logs/sogo/{count}
   * @secure
   */
  getSoGoLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/sogo/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description This Api endpoint lists all Watchdog logs. Tip: You can limit how many logs you want to get by using `/<count>` at the end of the api url.
   *
   * @tags Logs
   * @name GetWatchdogLogs
   * @summary Get Watchdog logs
   * @request GET:/api/v1/get/logs/watchdog/{count}
   * @secure
   */
  getWatchdogLogs = (count: number, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/logs/watchdog/${count}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
