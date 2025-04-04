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

export class DomainAntispamPolicies<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description You may create your own domain policy using this action. It takes a JSON object containing a domain informations.
   *
   * @tags Domain antispam policies
   * @name CreateDomainPolicy
   * @summary Create domain policy
   * @request POST:/api/v1/add/domain-policy
   * @secure
   */
  createDomainPolicy = (
    data: {
      /** domain name to which policy is associated to */
      domain?: string;
      /** exact address or use wildcard to match whole domain */
      object_from?: string;
      object_list?: "wl" | "bl";
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
      path: `/api/v1/add/domain-policy`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one o more domain policies.
   *
   * @tags Domain antispam policies
   * @name DeleteDomainPolicy
   * @summary Delete domain policy
   * @request POST:/api/v1/delete/domain-policy
   * @secure
   */
  deleteDomainPolicy = (
    data: {
      /** contains list of domain policys you want to delete */
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
      path: `/api/v1/delete/domain-policy`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all blacklist policies per domain.
   *
   * @tags Domain antispam policies
   * @name ListBlacklistDomainPolicy
   * @summary List blacklist domain policy
   * @request GET:/api/v1/get/policy_bl_domain/{domain}
   * @secure
   */
  listBlacklistDomainPolicy = (domain: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/policy_bl_domain/${domain}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all whitelist policies per domain.
   *
   * @tags Domain antispam policies
   * @name ListWhitelistDomainPolicy
   * @summary List whitelist domain policy
   * @request GET:/api/v1/get/policy_wl_domain/{domain}
   * @secure
   */
  listWhitelistDomainPolicy = (domain: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/policy_wl_domain/${domain}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
