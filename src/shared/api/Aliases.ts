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

export class Aliases<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description You may create your own mailbox alias using this action. It takes a JSON object containing a domain informations. Only one `goto*` option can be used, for ex. if you want learn as spam, then send just `goto_spam = 1` in request body.
   *
   * @tags Aliases
   * @name CreateAlias
   * @summary Create alias
   * @request POST:/api/v1/add/alias
   * @secure
   */
  createAlias = (
    data: {
      /** is alias active or not */
      active?: boolean;
      /** alias address, for catchall use "@domain.tld" */
      address?: string;
      /** destination address, comma separated */
      goto?: string;
      /** learn as ham */
      goto_ham?: boolean;
      /** silently ignore */
      goto_null?: boolean;
      /** learn as spam */
      goto_spam?: boolean;
      /** toggle visibility as selectable sender in SOGo */
      sogo_visible?: boolean;
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
      path: `/api/v1/add/alias`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You may create a time limited alias using this action. It takes a JSON object containing a domain and mailbox informations. Mailcow will generate a random alias.
   *
   * @tags Aliases
   * @name CreateTimeLimitedAlias
   * @summary Create time limited alias
   * @request POST:/api/v1/add/time_limited_alias
   * @secure
   */
  createTimeLimitedAlias = (
    data: {
      /** the mailbox an alias should be created for */
      username?: string;
      /** the domain */
      domain?: string;
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
      path: `/api/v1/add/time_limited_alias`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more aliases.
   *
   * @tags Aliases
   * @name DeleteAlias
   * @summary Delete alias
   * @request POST:/api/v1/delete/alias
   * @secure
   */
  deleteAlias = (data: string[], params: RequestParams = {}) =>
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
      path: `/api/v1/delete/alias`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update one or more aliases per request. You can also send just attributes you want to change
   *
   * @tags Aliases
   * @name UpdateAlias
   * @summary Update alias
   * @request POST:/api/v1/edit/alias
   * @secure
   */
  updateAlias = (
    data: {
      attr?: {
        /** is alias active or not */
        active?: boolean;
        /** alias address, for catchall use "@domain.tld" */
        address?: string;
        /** destination address, comma separated */
        goto?: string;
        /** learn as ham */
        goto_ham?: boolean;
        /** silently ignore */
        goto_null?: boolean;
        /** learn as spam */
        goto_spam?: boolean;
        private_comment?: string;
        public_comment?: string;
        /** toggle visibility as selectable sender in SOGo */
        sogo_visible?: boolean;
      };
      /** contains list of aliases you want update */
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
      path: `/api/v1/edit/alias`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list mailbox aliases existing in system.
   *
   * @tags Aliases
   * @name GetAliases
   * @summary Get aliases
   * @request GET:/api/v1/get/alias/{id}
   * @secure
   */
  getAliases = (id: "all" | "1" | "2" | "5" | "10", params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/alias/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description You can list time limited mailbox aliases existing in system.
   *
   * @tags Aliases
   * @name GetTimeLimitedAliases
   * @summary Get time limited aliases
   * @request GET:/api/v1/get/time_limited_aliases/{mailbox}
   * @secure
   */
  getTimeLimitedAliases = (mailbox: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/time_limited_aliases/${mailbox}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
