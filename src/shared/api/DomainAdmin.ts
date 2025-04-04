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

export class DomainAdmin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Using this endpoint you can create a new Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.
   *
   * @tags Domain admin
   * @name CreateDomainAdminUser
   * @summary Create Domain Admin user
   * @request POST:/api/v1/add/domain-admin
   * @secure
   */
  createDomainAdminUser = (
    data: {
      /** 1 for a active user status 0 for a disabled user status */
      active?: number;
      /** the domains the user should be a admin of */
      domains?: string;
      /** domain admin user password */
      password?: string;
      /** domain admin user password */
      password2?: string;
      /** the username for the admin user */
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
      path: `/api/v1/add/domain-admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can edit the ACLs of a Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.
   *
   * @tags Domain admin
   * @name EditDomainAdminAcl
   * @summary Edit Domain Admin ACL
   * @request POST:/api/v1/edit/da-acl
   * @secure
   */
  editDomainAdminAcl = (
    data: {
      /** contains the domain admin username you want to edit */
      items?: object;
      attr?: {
        /** contains the list of acl names that are active for this user */
        da_acl?: object;
      };
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
      path: `/api/v1/edit/da-acl`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can edit a existing Domain Admin user. This user has full control over a domain, and can create new mailboxes and aliases.
   *
   * @tags Domain admin
   * @name EditDomainAdminUser
   * @summary Edit Domain Admin user
   * @request POST:/api/v1/edit/domain-admin
   * @secure
   */
  editDomainAdminUser = (
    data: {
      attr?: {
        /** is the domain admin active or not */
        active?: boolean;
        /** the username of the domain admin, change this to change the username */
        username_new?: string;
        /** a list of all domains managed by this domain admin */
        domains?: string[];
        /** the new domain admin user password */
        password?: string;
        /** the new domain admin user password for confirmation */
        password2?: string;
      };
      /** contains the domain admin username you want to edit */
      items?: object;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        type?: "success" | "danger" | "error";
        /** contains request object */
        log?: any[];
        msg?: any[];
      },
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/edit/domain-admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint a existing Domain Admin user can be deleted.
   *
   * @tags Domain admin
   * @name DeleteDomainAdmin
   * @summary Delete Domain Admin
   * @request POST:/api/v1/delete/domain-admin
   * @secure
   */
  deleteDomainAdmin = (
    data: {
      /** contains list of usernames of the users you want to delete */
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
      path: `/api/v1/delete/domain-admin`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Domain admin
   * @name GetDomainAdmins
   * @summary Get Domain Admins
   * @request GET:/api/v1/get/domain-admin/all
   * @secure
   */
  getDomainAdmins = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/domain-admin/all`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
