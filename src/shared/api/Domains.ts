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

export class Domains<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description You may create your own domain using this action. It takes a JSON object containing a domain informations.
   *
   * @tags Domains
   * @name CreateDomain
   * @summary Create domain
   * @request POST:/api/v1/add/domain
   * @secure
   */
  createDomain = (
    data: {
      /** is domain active or not */
      active?: boolean;
      /** limit count of aliases associated with this domain */
      aliases?: number;
      /** relay domain or not */
      backupmx?: boolean;
      /** predefined mailbox quota in `add mailbox` form */
      defquota?: number;
      /** Description of domain */
      description?: string;
      /** Fully qualified domain name */
      domain?: string;
      /** is domain global address list active or not, it enables shared contacts accross domain in SOGo webmail */
      gal?: boolean;
      /** limit count of mailboxes associated with this domain */
      mailboxes?: number;
      /** maximum quota per mailbox */
      maxquota?: number;
      /** maximum quota for this domain (for all mailboxes in sum) */
      quota?: number;
      /** restart SOGo to activate the domain in SOGo */
      restart_sogo?: number;
      /** if not, them you have to create "dummy" mailbox for each address to relay */
      relay_all_recipients?: boolean;
      /** Relay non-existing mailboxes only. Existing mailboxes will be delivered locally. */
      relay_unknown_only?: boolean;
      rl_frame?: "s" | "m" | "h" | "d";
      /** rate limit value */
      rl_value?: number;
      /** tags for this Domain */
      tags?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** contains request object */
        log?: any[];
        msg?: any[];
        type?: "success" | "danger" | "error";
      }[],
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/add/domain`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more domains.
   *
   * @tags Domains
   * @name DeleteDomain
   * @summary Delete domain
   * @request POST:/api/v1/delete/domain
   * @secure
   */
  deleteDomain = (
    data: {
      items?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** contains request object */
        log?: any[];
        msg?: any[];
        type?: "success" | "danger" | "error";
      }[],
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/delete/domain`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more domain tags.
   *
   * @tags Domains
   * @name DeleteDomainTags
   * @summary Delete domain tags
   * @request POST:/api/v1/delete/domain/tag/{domain}
   * @secure
   */
  deleteDomainTags = (
    domain: string,
    data: {
      /** contains list of domains you want to delete */
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
      path: `/api/v1/delete/domain/tag/${domain}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update one or more domains per request. You can also send just attributes you want to change. Example: You can add domain names to items list and in attr object just include `"active": "0"` to deactivate domains.
   *
   * @tags Domains
   * @name UpdateDomain
   * @summary Update domain
   * @request POST:/api/v1/edit/domain
   * @secure
   */
  updateDomain = (
    data: {
      attr?: {
        /** is domain active or not */
        active?: boolean;
        /** limit count of aliases associated with this domain */
        aliases?: number;
        /** relay domain or not */
        backupmx?: boolean;
        /** predefined mailbox quota in `add mailbox` form */
        defquota?: number;
        /** Description of domain */
        description?: string;
        /** is domain global address list active or not, it enables shared contacts accross domain in SOGo webmail */
        gal?: boolean;
        /** limit count of mailboxes associated with this domain */
        mailboxes?: number;
        /** maximum quota per mailbox */
        maxquota?: number;
        /** maximum quota for this domain (for all mailboxes in sum) */
        quota?: number;
        /** if not, them you have to create "dummy" mailbox for each address to relay */
        relay_all_recipients?: boolean;
        /** Relay non-existing mailboxes only. Existing mailboxes will be delivered locally. */
        relay_unknown_only?: boolean;
        /** id of relayhost */
        relayhost?: number;
        rl_frame?: "s" | "m" | "h" | "d";
        /** rate limit value */
        rl_value?: number;
        /** tags for this Domain */
        tags?: string[];
      };
      /** contains list of domain names you want update */
      items?: string[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** contains request object */
        log?: any[];
        msg?: any[];
        type?: "success" | "danger" | "error";
      }[],
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/edit/domain`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update the footer of one or more domains per request.
   *
   * @tags Domains
   * @name UpdateDomainWideFooter
   * @summary Update domain wide footer
   * @request POST:/api/v1/edit/domain/footer
   * @secure
   */
  updateDomainWideFooter = (
    data: {
      attr?: {
        /** Footer text in HTML format */
        html?: string;
        /** Footer text in PLAIN text format */
        plain?: string;
        /** Array of mailboxes to exclude from domain wide footer */
        mbox_exclude?: object;
      };
      /** contains a list of domain names where you want to update the footer */
      items?: string[];
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
      path: `/api/v1/edit/domain/footer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all domains existing in system.
   *
   * @tags Domains
   * @name GetDomains
   * @summary Get domains
   * @request GET:/api/v1/get/domain/{id}
   * @secure
   */
  getDomains = (
    id: "all" | "mailcow.tld",
    query?: {
      /**
       * comma seperated list of tags to filter by
       * @example "tag1,tag2"
       */
      tags?: string;
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
      path: `/api/v1/get/domain/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
