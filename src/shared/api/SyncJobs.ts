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

export class SyncJobs<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description You can create new sync job using this action. It takes a JSON object containing a domain informations.
   *
   * @tags Sync jobs
   * @name CreateSyncJob
   * @summary Create sync job
   * @request POST:/api/v1/add/syncjob
   * @secure
   */
  createSyncJob = (
    data: {
      /** your local mailcow mailbox */
      parameters?: string;
      /** the smtp server where mails should be synced from */
      host1?: string;
      /** the smtp port of the target mail server */
      port1?: string;
      /** the username of the mailbox */
      user1?: string;
      /** the password of the mailbox */
      password?: string;
      /** the encryption method used to connect to the mailserver */
      enc1?: string;
      /** the interval in which messages should be syned */
      mins_internal?: number;
      /** sync into subfolder on destination (empty = do not use subfolder) */
      subfolder2?: string;
      /** only sync messages up to this age in days */
      maxage?: number;
      /** max speed transfer limit for the sync */
      maxbytespersecond?: number;
      /** timeout for connection to remote host */
      timeout1?: number;
      /** timeout for connection to local host */
      timeout2?: number;
      /** exclude objects (regex) */
      exclude?: string;
      /** custom parameters */
      custom_params?: string;
      /** delete duplicates on destination (--delete2duplicates) */
      delete2duplicates?: boolean;
      /** delete from source when completed (--delete1) */
      delete1?: boolean;
      /** delete messages on destination that are not on source (--delete2) */
      delete2?: boolean;
      /** try to automap folders ("Sent items", "Sent" => "Sent" etc.) (--automap) */
      automap?: boolean;
      /** skip duplicate messages across folders (first come, first serve) (--skipcrossduplicates) */
      skipcrossduplicates?: boolean;
      /** subscribe all folders (--subscribeall) */
      subscribeall?: boolean;
      /** enables or disables the sync job */
      active?: boolean;
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
      path: `/api/v1/add/syncjob`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can delete one or more sync jobs.
   *
   * @tags Sync jobs
   * @name DeleteSyncJob
   * @summary Delete sync job
   * @request POST:/api/v1/delete/syncjob
   * @secure
   */
  deleteSyncJob = (
    data: {
      /** contains list of aliases you want to delete */
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
      path: `/api/v1/delete/syncjob`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can update one or more sync jobs per request. You can also send just attributes you want to change.
   *
   * @tags Sync jobs
   * @name UpdateSyncJob
   * @summary Update sync job
   * @request POST:/api/v1/edit/syncjob
   * @secure
   */
  updateSyncJob = (
    data: {
      attr?: {
        /** Is sync job active */
        active?: boolean;
        /** Try to automap folders ("Sent items", "Sent" => "Sent" etc.) */
        automap?: boolean;
        /** Custom parameters passed to imapsync command */
        custom_params?: string;
        /** Delete from source when completed */
        delete1?: boolean;
        /** Delete messages on destination that are not on source */
        delete2?: boolean;
        /** Delete duplicates on destination */
        delete2duplicates?: boolean;
        /** Encryption */
        enc1?: "TLS" | "SSL" | "PLAIN";
        /** Exclude objects (regex) */
        exclude?: string;
        /** Hostname */
        host1?: string;
        /** Maximum age of messages in days that will be polled from remote (0 = ignore age) */
        maxage?: number;
        /** Max. bytes per second (0 = unlimited) */
        maxbytespersecond?: number;
        /** Interval (min) */
        mins_interval?: number;
        /** Password */
        password1?: string;
        /** Port */
        port1?: string;
        /** Skip duplicate messages across folders (first come, first serve) */
        skipcrossduplicates?: boolean;
        /** Sync into subfolder on destination (empty = do not use subfolder) */
        subfolder2?: string;
        /** Subscribe all folders */
        subscribeall?: boolean;
        /** Timeout for connection to remote host */
        timeout1?: number;
        /** Timeout for connection to local host */
        timeout2?: number;
        /** Username */
        user1?: string;
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
      path: `/api/v1/edit/syncjob`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can list all syn jobs existing in system.
   *
   * @tags Sync jobs
   * @name GetSyncJobs
   * @summary Get sync jobs
   * @request GET:/api/v1/get/syncjobs/all/no_log
   * @secure
   */
  getSyncJobs = (params: RequestParams = {}) =>
    this.request<
      void,
      {
        /** @example "error" */
        type: string;
        /** @example "authentication failed" */
        msg: string;
      }
    >({
      path: `/api/v1/get/syncjobs/all/no_log`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
