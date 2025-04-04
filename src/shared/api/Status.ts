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

import { HttpClient, type RequestParams } from "./http-client";

export class Status<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can get the status of all containers and when hey where started and a few other details.
   *
   * @tags Status
   * @name GetContainerStatus
   * @summary Get container status
   * @request GET:/api/v1/get/status/containers
   * @secure
   */
  getContainerStatus = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/status/containers`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get the status of the vmail and the amount of used storage.
   *
   * @tags Status
   * @name GetVmailStatus
   * @summary Get vmail status
   * @request GET:/api/v1/get/status/vmail
   * @secure
   */
  getVmailStatus = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/status/vmail`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get the current running release of this instance.
   *
   * @tags Status
   * @name GetVersionStatus
   * @summary Get version status
   * @request GET:/api/v1/get/status/version
   * @secure
   */
  getVersionStatus = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/status/version`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
