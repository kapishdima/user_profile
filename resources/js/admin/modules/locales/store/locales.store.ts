import { LocaleDomainEntity } from "../models";

export interface ILocalesStore {
    save: (locales: LocaleDomainEntity[]) => LocaleDomainEntity[];
    saveGeneralLocale: (locales: LocaleDomainEntity) => LocaleDomainEntity;
    getAllLocales: () => LocaleDomainEntity[];
    getOne: (id: string) => LocaleDomainEntity;
    getGeneralLocale: () => LocaleDomainEntity;
    clear: () => void;
}

export const LocalesStore: ILocalesStore = {
    save: (locales: LocaleDomainEntity[]): LocaleDomainEntity[] => {
        localStorage.setItem(LOCALES_STORE_KEY, JSON.stringify(locales));

        return LocalesStore.getAllLocales();
    },
    getAllLocales: (): LocaleDomainEntity[] => {
        const localesFromStorage: LocaleDomainEntity[] = JSON.parse(
            localStorage.getItem(LOCALES_STORE_KEY)
        );

        return localesFromStorage;
    },
    getOne: (id: string): LocaleDomainEntity => {
        const locales = LocalesStore.getAllLocales();

        if (!locales) {
            return;
        }

        return locales.find((locale) => locale.id === id);
    },
    saveGeneralLocale: (locale: LocaleDomainEntity): LocaleDomainEntity => {
        localStorage.setItem(GENERAL_LOCALE_STORE_KEY, JSON.stringify(locale));

        return locale;
    },
    getGeneralLocale: (): LocaleDomainEntity => {
        const generalLocal: LocaleDomainEntity = JSON.parse(
            localStorage.getItem(GENERAL_LOCALE_STORE_KEY)
        );

        return generalLocal;
    },
    clear: () => {
        localStorage.removeItem(GENERAL_LOCALE_STORE_KEY);
        localStorage.removeItem(LOCALES_STORE_KEY);
    },
};

const LOCALES_STORE_KEY = "test/locales";
const GENERAL_LOCALE_STORE_KEY = "test/general_locale";
