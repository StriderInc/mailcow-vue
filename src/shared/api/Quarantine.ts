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

export class Quarantine<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can delete a email from quarantine, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Quarantine
   * @name DeleteMailsInQuarantine
   * @summary Delete mails in Quarantine
   * @request POST:/api/v1/delete/qitem
   * @secure
   */
  deleteMailsInQuarantine = (
    data: {
      /** contains list of emails you want to delete */
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
      path: `/api/v1/delete/qitem`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get all mails that are currently in Quarantine.
   *
   * @tags Quarantine
   * @name GetMailsInQuarantine
   * @summary Get mails in Quarantine
   * @request GET:/api/v1/get/quarantine/all
   * @secure
   */
  getMailsInQuarantine = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/quarantine/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
