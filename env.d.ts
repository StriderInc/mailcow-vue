/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly API_BASE_URL: string;
    readonly VITE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
