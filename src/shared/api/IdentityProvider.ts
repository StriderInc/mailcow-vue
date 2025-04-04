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

export class IdentityProvider<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Configure an external Identity Provider to use as user authentication
   *
   * @tags Identity Provider
   * @name EditExternalIdentityProviderSettings
   * @summary Edit external Identity Provider
   * @request POST:/api/v1/edit/identity-provider
   * @secure
   */
  editExternalIdentityProviderSettings = (
    data: {
      /** @default ["identity-provider"] */
      items?: any[];
      attr?: {
        /** Specifies the type of the Identity Provider */
        authsource?: "ldap" | "keycloak" | "generic-oidc";
        /** The base URL of your Keycloak server. Required if `authsource` is keycloak. */
        server_url?: string;
        /** The Keycloak realm where the mailcow client is configured. Required if `authsource` is keycloak. */
        realm?: string;
        /** The Client ID assigned to mailcow Client in OIDC Provider. Required if `authsource` is keycloak or generic-oidc. */
        client_id?: string;
        /** The Client Secret assigned to mailcow Client in OIDC Provider. Required if `authsource` is keycloak or generic-oidc. */
        client_secret?: string;
        /** The redirect URL that OIDC Provider will use after authentication. Required if `authsource` is keycloak or generic-oidc. */
        redirect_url?: string;
        /** Specifies the Keycloak version. Required if `authsource` is keycloak. */
        version?: string;
        /** (Optional) If no matching Attribute Mapping exists for a User, the default template will be used for creating the mailbox, but not for updating the mailbox. */
        default_template?: string;
        /** (Optional) Attribute values used to match a mailbox template. Each element corresponds to the respective index in the templates array (i.e., the first element matches the first element of templates, the second matches the second, and so on). */
        mappers?: any[];
        /** (Optional) Defines the mailbox templates to be assigned. Each element corresponds to the respective index in the `mappers` array. */
        templates?: any[];
        /**
         * If enabled, SSL certificate validation is bypassed
         * @default false
         */
        ignore_ssl_error?: boolean;
        /**
         * If enabled, mailcow will attempt to validate user credentials using the Keycloak Admin REST API instead of relying solely on the Authorization Code Flow.
         * @default false
         */
        mailpassword_flow?: boolean;
        /**
         * If enabled, mailcow periodically performs a full sync of all users from Keycloak or LDAP.
         * @default false
         */
        periodic_sync?: boolean;
        /**
         * If enabled, new users are automatically imported from Keycloak or LDAP into mailcow.
         * @default false
         */
        import_users?: boolean;
        /**
         * Defines the time interval (in minutes) for periodic synchronization and user imports.
         * @default 15
         */
        sync_interval?: number;
        /** The address of your LDAP server. You can provide a single hostname or a comma-separated list of hosts for fallback in case the primary server is unreachable. Required if `authsource` is ldap. */
        host?: string;
        /** The port used to connect to the LDAP server. Required if `authsource` is ldap. */
        port?: string;
        /**
         * enable LDAPS connection. If Port is set to 389 it will be overriden to 636.
         * @default false
         */
        use_ssl?: boolean;
        /**
         * enable TLS connection. TLS is recommended over SSL. SSL Ports cannot be used.
         * @default false
         */
        use_tls?: boolean;
        /** The Distinguished Name (DN) from which searches will be performed. Required if `authsource` is ldap. */
        basedn?: string;
        /**
         * The LDAP attribute used to identify users during authentication. Required if `authsource` is ldap.
         * @default "mail"
         */
        username_field?: string;
        /** An optional LDAP search filter to refine which users can authenticate. */
        filter?: string;
        /** Specifies an LDAP attribute that holds a specific value which can be mapped to a mailbox template using the Attribute Mapping section. Required if `authsource` is ldap. */
        attribute_field?: string;
        /** The Distinguished Name (DN) of the LDAP user that will be used to authenticate and perform LDAP searches. This status should have sufficient permissions to read the required attributes. Required if `authsource` is ldap. */
        binddn?: string;
        /** The password for the Bind DN user. It is required for authentication when connecting to the LDAP server. Required if `authsource` is ldap. */
        bindpass?: string;
        /** The OIDC provider's authorization server URL. Required if `authsource` is generic-oidc. */
        authorize_url?: string;
        /** The OIDC provider's token server URL. Required if `authsource` is generic-oidc. */
        token_url?: string;
        /** The OIDC provider's user info server URL. Required if `authsource` is generic-oidc. */
        userinfo_url?: string;
        /**
         * Specifies the OIDC scopes requested during authentication.
         * @default "openid profile email mailcow_template"
         */
        client_scopes?: string;
      };
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
      path: `/api/v1/edit/identity-provider`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
