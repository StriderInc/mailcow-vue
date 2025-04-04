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

export class Routing<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create Sender-Dependent Transports.
   *
   * @tags Routing
   * @name CreateSenderDependentTransports
   * @summary Create Sender-Dependent Transports
   * @request POST:/api/v1/add/relayhost
   * @secure
   */
  createSenderDependentTransports = (
    data: {
      /** the hostname of the smtp server with port */
      hostname?: string;
      /** the password for the smtp user */
      password?: string;
      /** the username used to authenticate */
      username?: string;
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
      path: `/api/v1/add/relayhost`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can create Sender-Dependent Transports.
   *
   * @tags Routing
   * @name CreateTransportMaps
   * @summary Create Transport Maps
   * @request POST:/api/v1/add/transport
   * @secure
   */
  createTransportMaps = (
    data: {
      /** 1 for a active transport map 0 for a disabled transport map */
      active?: number;
      destination?: string;
      nexthop?: string;
      /** the password for the smtp user */
      password?: string;
      /** the username used to authenticate */
      username?: string;
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
      path: `/api/v1/add/transport`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a Sender-Dependent Transport, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Routing
   * @name DeleteSenderDependentTransports
   * @summary Delete Sender-Dependent Transports
   * @request POST:/api/v1/delete/relayhost
   * @secure
   */
  deleteSenderDependentTransports = (
    data: {
      /** contains list of Sender-Dependent Transport you want to delete */
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
      path: `/api/v1/delete/relayhost`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a Transport Maps, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Routing
   * @name DeleteTransportMaps
   * @summary Delete Transport Maps
   * @request POST:/api/v1/delete/transport
   * @secure
   */
  deleteTransportMaps = (
    data: {
      /** contains list of transport maps you want to delete */
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
      path: `/api/v1/delete/transport`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all Sender-Dependent Transports.
   *
   * @tags Routing
   * @name GetSenderDependentTransports
   * @summary Get Sender-Dependent Transports
   * @request GET:/api/v1/get/relayhost/{id}
   * @secure
   */
  getSenderDependentTransports = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/relayhost/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all Transport Maps.
   *
   * @tags Routing
   * @name GetTransportMaps
   * @summary Get Transport Maps
   * @request GET:/api/v1/get/transport/{id}
   * @secure
   */
  getTransportMaps = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/transport/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
