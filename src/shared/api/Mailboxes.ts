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

export class Mailboxes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description You may create your own mailbox using this action. It takes a JSON object containing a domain informations.
   *
   * @tags Mailboxes
   * @name CreateMailbox
   * @summary Create mailbox
   * @request POST:/api/v1/add/mailbox
   * @secure
   */
  createMailbox = (
    data: {
      /** is mailbox active or not */
      active?: boolean;
      /** domain name */
      domain?: string;
      /** left part of email address */
      local_part?: string;
      /** Full name of the mailbox user */
      name?: string;
      /**
       * Specifies the authentication source for the mailbox.
       * @default "mailcow"
       */
      authsource?: "mailcow" | "ldap" | "keycloak" | "generic-oidc";
      /** mailbox password for confirmation */
      password2?: string;
      /** mailbox password when using `mailcow` as the authentication source. */
      password?: string;
      /** mailbox quota */
      quota?: number;
      /** forces the user to update its password on first login */
      force_pw_update?: boolean;
      /** force inbound email tls encryption */
      tls_enforce_in?: boolean;
      /** force oubound tmail tls encryption */
      tls_enforce_out?: boolean;
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
      path: `/api/v1/add/mailbox`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more mailboxes.
   *
   * @tags Mailboxes
   * @name DeleteMailbox
   * @summary Delete mailbox
   * @request POST:/api/v1/delete/mailbox
   * @secure
   */
  deleteMailbox = (
    data: {
      /** contains list of mailboxes you want to delete */
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
      path: `/api/v1/delete/mailbox`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more mailbox tags.
   *
   * @tags Mailboxes
   * @name DeleteMailboxTags
   * @summary Delete mailbox tags
   * @request POST:/api/v1/delete/mailbox/tag/{mailbox}
   * @secure
   */
  deleteMailboxTags = (
    mailbox: string,
    data: {
      /** contains list of mailboxes you want to delete */
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
      path: `/api/v1/delete/mailbox/tag/${mailbox}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update one or more mailboxes per request. You can also send just attributes you want to change
   *
   * @tags Mailboxes
   * @name UpdateMailbox
   * @summary Update mailbox
   * @request POST:/api/v1/edit/mailbox
   * @secure
   */
  updateMailbox = (
    data: {
      attr?: {
        /** is mailbox active or not */
        active?: boolean;
        /** force user to change password on next login */
        force_pw_update?: boolean;
        /** Full name of the mailbox user */
        name?: string;
        /** Specifies the authentication source for the mailbox. */
        authsource?: "mailcow" | "ldap" | "keycloak" | "generic-oidc";
        /** new mailbox password for confirmation */
        password2?: string;
        /** new mailbox password when using `mailcow` as the authentication source. */
        password?: string;
        /** mailbox quota */
        quota?: number;
        /** list of allowed send from addresses */
        sender_acl?: object;
        /** is access to SOGo webmail active or not */
        sogo_access?: boolean;
      };
      /** contains list of mailboxes you want update */
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
      path: `/api/v1/edit/mailbox`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update custom attributes of one or more mailboxes per request.
   *
   * @tags Mailboxes
   * @name UpdateMailboxCustomAttributes
   * @summary Update mailbox custom attributes
   * @request POST:/api/v1/edit/mailbox/custom-attribute
   * @secure
   */
  updateMailboxCustomAttributes = (
    data: {
      attr?: {
        /** Array of attribute keys */
        attribute?: object;
        /** Array of attribute values */
        value?: object;
      };
      /** contains list of mailboxes you want update */
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
      path: `/api/v1/edit/mailbox/custom-attribute`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint it is possible to update the pushover settings for mailboxes
   *
   * @tags Mailboxes
   * @name UpdatePushoverSettings
   * @summary Update Pushover settings
   * @request POST:/api/v1/edit/pushover
   * @secure
   */
  updatePushoverSettings = (
    data: {
      attr?: {
        /** Enables pushover 1 disable pushover 0 */
        active?: number;
        /** Send the Push with High priority */
        evaluate_x_prio?: number;
        /** Pushover key */
        key?: string;
        /** Only send push for prio mails */
        only_x_prio?: number;
        /** Set notification sound */
        sound?: string;
        /** Only send push for emails from these senders */
        senders?: string;
        /** Regex to match senders for which a push will be send */
        senders_regex?: string;
        /** Custom push noficiation text */
        text?: string;
        /** Push title */
        title?: string;
        /** Pushover token */
        token?: string;
      };
      /** contains list of mailboxes you want to delete */
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
      path: `/api/v1/edit/pushover`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update one or more mailboxes per request.
   *
   * @tags Mailboxes
   * @name QuarantineNotifications
   * @summary Quarantine Notifications
   * @request POST:/api/v1/edit/quarantine_notification
   * @secure
   */
  quarantineNotifications = (
    data: {
      attr?: {
        /** recurrence */
        quarantine_notification?: "hourly" | "daily" | "weekly" | "never";
      };
      /** contains list of mailboxes you want set qurantine notifications */
      items?: object;
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
      path: `/api/v1/edit/quarantine_notification`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Using this endpoints its possible to update the ACL's for mailboxes
   *
   * @tags Mailboxes
   * @name UpdateMailboxAcl
   * @summary Update mailbox ACL
   * @request POST:/api/v1/edit/user-acl
   * @secure
   */
  updateMailboxAcl = (
    data: {
      attr?: {
        /** contains a list of active user acls */
        user_acl?: object;
      };
      /** contains list of mailboxes you want to delete */
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
      path: `/api/v1/edit/user-acl`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all mailboxes existing in system.
   *
   * @tags Mailboxes
   * @name GetMailboxes
   * @summary Get mailboxes
   * @request GET:/api/v1/get/mailbox/{id}
   * @secure
   */
  getMailboxes = (
    id: "all" | "user@domain.tld",
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
      path: `/api/v1/get/mailbox/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can edit the spam filter score for a certain mailbox.
   *
   * @tags Mailboxes
   * @name EditMailboxSpamFilterScore
   * @summary Edit mailbox spam filter score
   * @request POST:/api/v1/edit/spam-score/
   * @secure
   */
  editMailboxSpamFilterScore = (data: any, params: RequestParams = {}) =>
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
      path: `/api/v1/edit/spam-score/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all mailboxes existing in system for a specific domain.
   *
   * @tags Mailboxes
   * @name GetMailboxesOfADomain
   * @summary Get mailboxes of a domain
   * @request GET:/api/v1/get/mailbox/all/{domain}
   * @secure
   */
  getMailboxesOfADomain = (domain: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/mailbox/all/${domain}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Using this endpoint you can get the global spam filter score or the spam filter score of a certain mailbox.
   *
   * @tags Mailboxes
   * @name GetMailboxOrGlobalSpamFilterScore
   * @summary Get mailbox or global spam filter score
   * @request GET:/api/v1/get/spam-score/{mailbox}
   * @secure
   */
  getMailboxOrGlobalSpamFilterScore = (mailbox: string, params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/spam-score/${mailbox}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
