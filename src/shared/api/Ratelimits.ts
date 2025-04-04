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

export class Ratelimits<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can get the ratelimits for a certain mailbox. You can use all for all mailboxes.
   *
   * @tags Ratelimits
   * @name GetMailboxRatelimits
   * @summary Get mailbox ratelimits
   * @request GET:/api/v1/get/rl-mbox/{mailbox}
   * @secure
   */
  getMailboxRatelimits = (mailbox: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/rl-mbox/${mailbox}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get the ratelimits for a certain domains. You can use all for all domain.
   *
   * @tags Ratelimits
   * @name GetDomainRatelimits
   * @summary Get domain ratelimits
   * @request GET:/api/v1/get/rl-domain/{domain}
   * @secure
   */
  getDomainRatelimits = (domain: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/rl-domain/${domain}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can edit the ratelimits for a certain mailbox.
   *
   * @tags Ratelimits
   * @name EditMailboxRatelimits
   * @summary Edit mailbox ratelimits
   * @request POST:/api/v1/edit/rl-mbox/
   * @secure
   */
  editMailboxRatelimits = (
    data: {
      attr?: {
        /** contains the frame for the ratelimit h,s,m */
        rl_frame?: string;
        /** contains the rate for the ratelimit 10,20,50,1 */
        rl_value?: number;
      };
      /** contains list of mailboxes you want to edit the ratelimit of */
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
      path: `/api/v1/edit/rl-mbox/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can edit the ratelimits for a certain domains.
   *
   * @tags Ratelimits
   * @name EditDomainRatelimits
   * @summary Edit domain ratelimits
   * @request POST:/api/v1/edit/rl-domain/
   * @secure
   */
  editDomainRatelimits = (
    data: {
      attr?: {
        /** contains the frame for the ratelimit h,s,m */
        rl_frame?: string;
        /** contains the rate for the ratelimit 10,20,50,1 */
        rl_value?: number;
      };
      /** contains list of domains you want to edit the ratelimit of */
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
      path: `/api/v1/edit/rl-domain/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
