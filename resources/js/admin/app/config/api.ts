export const apiConfig = {
    baseURL:
        import.meta.env.MIX_ENV === "development"
            ? import.meta.env.MIX_DEV_APP_URL
            : import.meta.env.MIX_PROD_API_URL,
};
