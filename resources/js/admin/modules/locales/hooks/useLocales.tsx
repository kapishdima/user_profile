import { LocalesService } from "../services/locales.service";

export const useLocales = () => {
    const fetchAndSaveLocales = async () => {
        const { locales, generalLocale } =
            await LocalesService.fetchAndSaveLocales();

        return {
            locales,
            generalLocale,
        };
    };

    const clearLocales = () => {
        LocalesService.clearLocales();
    };

    return { fetchAndSaveLocales, clearLocales };
};
