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

export class AppPasswords<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create a new app password for a specific mailbox.
   *
   * @tags App Passwords
   * @name CreateAppPassword
   * @summary Create App Password
   * @request POST:/api/v1/add/app-passwd
   * @secure
   */
  createAppPassword = (
    data: {
      /** is alias active or not */
      active?: boolean;
      /** mailbox for which the app password should be created */
      username?: string;
      /** name of your app password */
      app_name?: string;
      /** your app password */
      app_passwd?: string;
      /** your app password */
      app_passwd2?: string;
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
      path: `/api/v1/add/app-passwd`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a single app password.
   *
   * @tags App Passwords
   * @name DeleteAppPassword
   * @summary Delete App Password
   * @request POST:/api/v1/delete/app-passwd
   * @secure
   */
  deleteAppPassword = (
    data: {
      /** contains list of app passwords you want to delete */
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
      path: `/api/v1/delete/app-passwd`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all app passwords from a specific mailbox.
   *
   * @tags App Passwords
   * @name GetAppPassword
   * @summary Get App Password
   * @request GET:/api/v1/get/app-passwd/all/{mailbox}
   * @secure
   */
  getAppPassword = (mailbox: "hello@mailcow.email", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/app-passwd/all/${mailbox}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
