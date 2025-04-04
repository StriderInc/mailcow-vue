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

export class CrossOriginResourceSharingCors<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This endpoint allows you to manage Cross-Origin Resource Sharing (CORS) settings for the API. CORS is a security feature implemented by web browsers to prevent unauthorized cross-origin requests. By editing the CORS settings, you can specify which domains and which methods are permitted to access the API resources from outside the mailcow domain.
   *
   * @tags Cross-Origin Resource Sharing (CORS)
   * @name EditCrossOriginResourceSharingCorsSettings
   * @summary Edit Cross-Origin Resource Sharing (CORS) settings
   * @request POST:/api/v1/edit/cors
   * @secure
   */
  editCrossOriginResourceSharingCorsSettings = (
    data: {
      attr?: {
        allowed_origins?: string[];
        allowed_methods?: string[];
      };
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
      path: `/api/v1/edit/cors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
