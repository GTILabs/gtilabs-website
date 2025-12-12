// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 *
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 *
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 *
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 *
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 *
 * You can override `.env` values from the command line like so:
 *
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
    export const ANDROID_NDK_HOME: string;
    export const HOMEBREW_PREFIX: string;
    export const SDKMAN_CANDIDATES_API: string;
    export const GOROOT: string;
    export const HERD_PHP_84_INI_SCAN_DIR: string;
    export const FORCE_COLOR: string;
    export const HERD_PHP_74_INI_SCAN_DIR: string;
    export const HOMEBREW_REPOSITORY: string;
    export const GSETTINGS_SCHEMA_DIR: string;
    export const PATH: string;
    export const CONDA_PREFIX: string;
    export const LOGNAME: string;
    export const OSLogRateLimit: string;
    export const BUN_INSTALL: string;
    export const XPC_FLAGS: string;
    export const __CF_USER_TEXT_ENCODING: string;
    export const NVM_CD_FLAGS: string;
    export const _CE_M: string;
    export const NVM_DIR: string;
    export const JAVA_HOME: string;
    export const CONDA_SHLVL: string;
    export const CONDA_EXE: string;
    export const npm_config_color: string;
    export const SDKMAN_DIR: string;
    export const SDKMAN_CANDIDATES_DIR: string;
    export const CONDA_DEFAULT_ENV: string;
    export const XPC_SERVICE_NAME: string;
    export const HOMEBREW_CELLAR: string;
    export const NVM_BIN: string;
    export const PNPM_HOME: string;
    export const CONDA_PROMPT_MODIFIER: string;
    export const GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
    export const GOPATH: string;
    export const COMMAND_MODE: string;
    export const VOLTA_HOME: string;
    export const INFOPATH: string;
    export const SHELL: string;
    export const TMPDIR: string;
    export const __CFBundleIdentifier: string;
    export const DEBUG_COLORS: string;
    export const COLORTERM: string;
    export const TOOLBOX_VERSION: string;
    export const HERD_PHP_85_INI_SCAN_DIR: string;
    export const HOME: string;
    export const NVM_INC: string;
    export const GOBIN: string;
    export const _CE_CONDA: string;
    export const MOCHA_COLORS: string;
    export const LANG: string;
    export const MAVEN_HOME: string;
    export const SSH_AUTH_SOCK: string;
    export const OLDPWD: string;
    export const HERD_PHP_83_INI_SCAN_DIR: string;
    export const USER: string;
    export const KOTLIN_HOME: string;
    export const SDKMAN_PLATFORM: string;
    export const GRADLE_HOME: string;
    export const PWD: string;
    export const CONDA_PYTHON_EXE: string;
    export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Values are replaced statically at build time.
 *
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 *
 * This module cannot be imported into client-side code.
 *
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 *
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
    export const env: {
        ANDROID_NDK_HOME: string;
        HOMEBREW_PREFIX: string;
        SDKMAN_CANDIDATES_API: string;
        GOROOT: string;
        HERD_PHP_84_INI_SCAN_DIR: string;
        FORCE_COLOR: string;
        HERD_PHP_74_INI_SCAN_DIR: string;
        HOMEBREW_REPOSITORY: string;
        GSETTINGS_SCHEMA_DIR: string;
        PATH: string;
        CONDA_PREFIX: string;
        LOGNAME: string;
        OSLogRateLimit: string;
        BUN_INSTALL: string;
        XPC_FLAGS: string;
        __CF_USER_TEXT_ENCODING: string;
        NVM_CD_FLAGS: string;
        _CE_M: string;
        NVM_DIR: string;
        JAVA_HOME: string;
        CONDA_SHLVL: string;
        CONDA_EXE: string;
        npm_config_color: string;
        SDKMAN_DIR: string;
        SDKMAN_CANDIDATES_DIR: string;
        CONDA_DEFAULT_ENV: string;
        XPC_SERVICE_NAME: string;
        HOMEBREW_CELLAR: string;
        NVM_BIN: string;
        PNPM_HOME: string;
        CONDA_PROMPT_MODIFIER: string;
        GSETTINGS_SCHEMA_DIR_CONDA_BACKUP: string;
        GOPATH: string;
        COMMAND_MODE: string;
        VOLTA_HOME: string;
        INFOPATH: string;
        SHELL: string;
        TMPDIR: string;
        __CFBundleIdentifier: string;
        DEBUG_COLORS: string;
        COLORTERM: string;
        TOOLBOX_VERSION: string;
        HERD_PHP_85_INI_SCAN_DIR: string;
        HOME: string;
        NVM_INC: string;
        GOBIN: string;
        _CE_CONDA: string;
        MOCHA_COLORS: string;
        LANG: string;
        MAVEN_HOME: string;
        SSH_AUTH_SOCK: string;
        OLDPWD: string;
        HERD_PHP_83_INI_SCAN_DIR: string;
        USER: string;
        KOTLIN_HOME: string;
        SDKMAN_PLATFORM: string;
        GRADLE_HOME: string;
        PWD: string;
        CONDA_PYTHON_EXE: string;
        NODE_ENV: string;
        [key: `PUBLIC_${string}`]: undefined;
        [key: `${string}`]: string | undefined;
    }
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 *
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
    export const env: {
        [key: `PUBLIC_${string}`]: string | undefined;
    }
}
