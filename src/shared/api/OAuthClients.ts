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

export class OAuthClients<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create a oAuth clients.
   *
   * @tags oAuth Clients
   * @name CreateOAuthClient
   * @summary Create oAuth Client
   * @request POST:/api/v1/add/oauth2-client
   * @secure
   */
  createOAuthClient = (
    data: {
      /** the uri where you should be redirected after oAuth */
      redirect_uri?: string;
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
      path: `/api/v1/add/oauth2-client`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a oAuth client, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags oAuth Clients
   * @name DeleteOAuthClient
   * @summary Delete oAuth Client
   * @request POST:/api/v1/delete/oauth2-client
   * @secure
   */
  deleteOAuthClient = (
    data: {
      /** contains list of oAuth clients you want to delete */
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
      path: `/api/v1/delete/oauth2-client`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all oAuth clients.
   *
   * @tags oAuth Clients
   * @name GetOAuthClients
   * @summary Get oAuth Clients
   * @request GET:/api/v1/get/oauth2-client/{id}
   * @secure
   */
  getOAuthClients = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/oauth2-client/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
