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

export class QueueManager<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this API you can delete the current mail queue. This will delete all mails in it. This API uses the command: `postsuper -d`
   *
   * @tags Queue Manager
   * @name DeleteQueue
   * @summary Delete Queue
   * @request POST:/api/v1/delete/mailq
   * @secure
   */
  deleteQueue = (
    data: {
      /** use super_delete to delete the mail queue */
      action?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/delete/mailq`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this API you can flush the current mail queue. This will try to deliver all mails currently in it. This API uses the command: `postqueue -f`
   *
   * @tags Queue Manager
   * @name FlushQueue
   * @summary Flush Queue
   * @request POST:/api/v1/edit/mailq
   * @secure
   */
  flushQueue = (
    data: {
      /** use flush to flush the mail queue */
      action?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/edit/mailq`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get the current mail queue and everything it contains.
   *
   * @tags Queue Manager
   * @name GetQueue
   * @summary Get Queue
   * @request GET:/api/v1/get/mailq/all
   * @secure
   */
  getQueue = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/mailq/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
