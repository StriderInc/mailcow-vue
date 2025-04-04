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

export class AddressRewriting<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create a BCC map to forward all mails via a bcc for a given domain.
   *
   * @tags Address Rewriting
   * @name CreateBccMap
   * @summary Create BCC Map
   * @request POST:/api/v1/add/bcc
   * @secure
   */
  createBccMap = (
    data: {
      /** 1 for a active user status 0 for a disabled user status */
      active?: number;
      /** the email address where all mails should be send to */
      bcc_dest?: string;
      /** the domain which emails should be forwarded */
      local_dest?: string;
      /** the type of bcc map can be `sender` or `rcpt` */
      type?: "sender" | "rcpt";
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
      path: `/api/v1/add/bcc`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can create a recipient map to forward all mails from one email address to another.
   *
   * @tags Address Rewriting
   * @name CreateRecipientMap
   * @summary Create Recipient Map
   * @request POST:/api/v1/add/recipient_map
   * @secure
   */
  createRecipientMap = (
    data: {
      /** 1 for a active user status 0 for a disabled user status */
      active?: number;
      /** the email address that should receive the forwarded emails */
      recipient_map_new?: string;
      /** the email address which emails should be forwarded */
      recipient_map_old?: string;
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
      path: `/api/v1/add/recipient_map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a BCC map, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Address Rewriting
   * @name DeleteBccMap
   * @summary Delete BCC Map
   * @request POST:/api/v1/delete/bcc
   * @secure
   */
  deleteBccMap = (
    data: {
      /** contains list of bcc maps you want to delete */
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
      path: `/api/v1/delete/bcc`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can delete a recipient map, for this you have to know its ID. You can get the ID using the GET method.
   *
   * @tags Address Rewriting
   * @name DeleteRecipientMap
   * @summary Delete Recipient Map
   * @request POST:/api/v1/delete/recipient_map
   * @secure
   */
  deleteRecipientMap = (
    data: {
      /** contains list of recipient maps you want to delete */
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
      path: `/api/v1/delete/recipient_map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all BCC maps.
   *
   * @tags Address Rewriting
   * @name GetBccMap
   * @summary Get BCC Map
   * @request GET:/api/v1/get/bcc/{id}
   * @secure
   */
  getBccMap = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/bcc/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get all recipient maps.
   *
   * @tags Address Rewriting
   * @name GetRecipientMap
   * @summary Get Recipient Map
   * @request GET:/api/v1/get/recipient_map/{id}
   * @secure
   */
  getRecipientMap = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/recipient_map/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
