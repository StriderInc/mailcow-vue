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

export class SingleSignOn<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can issue a token for Domain Admin user. This token can be used for autologin Domain Admin user by using query_string var sso_token={token}. Token expiration time is 30s
   *
   * @tags Single Sign-On
   * @name IssueDomainAdminSsoToken
   * @summary Issue Domain Admin SSO token
   * @request POST:/api/v1/add/sso/domain-admin
   * @secure
   */
  issueDomainAdminSsoToken = (
    data: {
      /** the username for the admin user */
      username?: object;
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
      path: `/api/v1/add/sso/domain-admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
