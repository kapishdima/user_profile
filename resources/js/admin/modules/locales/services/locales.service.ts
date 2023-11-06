import {
    LocaleDomainEntity,
    LocaleResponseEntity,
    toDomainEntity,
} from "../models";

import { LocalesAPI } from "../api/locales.api";
import { LocalesStore } from "../store/locales.store";

export const LocalesService = {
    fetchAndSaveLocales: async (): Promise<{
        locales: LocaleDomainEntity[];
        generalLocale: LocaleDomainEntity;
    }> => {
        const localesFromStore = LocalesStore.getAllLocales();
        const generalLocaleFromStore = LocalesStore.getGeneralLocale();

        if (localesFromStore && generalLocaleFromStore) {
            return {
                locales: localesFromStore,
                generalLocale: generalLocaleFromStore,
            };
        }

        const localesFromAPI: LocaleResponseEntity[] =
            await LocalesAPI.getAllLocales();

        const generalLocale = setGeneralLocale(localesFromAPI);

        const locales = LocalesStore.save(localesFromAPI.map(toDomainEntity));

        return {
            locales,
            generalLocale,
        };
    },
    clearLocales: () => {
        LocalesStore.clear();
    },
};
const GENERAL_LOCALE_NAME = "uk";

const setGeneralLocale = (
    locales: LocaleResponseEntity[]
): LocaleDomainEntity => {
    const ukrainianLocale = locales.find(
        (locale) => locale.locale === GENERAL_LOCALE_NAME
    );

    if (!ukrainianLocale) {
        return;
    }

    return LocalesStore.saveGeneralLocale(toDomainEntity(ukrainianLocale));
};
