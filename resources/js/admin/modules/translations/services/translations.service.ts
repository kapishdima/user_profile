import { LocaleDomainEntity } from "modules/locales/models";

export type Translation = {
    locale_id: string;
};

export interface ITranslationsService {
    getTranslationFromGroup: <T extends Translation>(
        translations: T[],
        locale: LocaleDomainEntity
    ) => T;
}
export const TranslationsService = {
    getTranslationFromGroup: <T extends Translation>(
        translations: T[],
        locale: LocaleDomainEntity
    ): T => {
        return Object.values(translations).find(
            (translation) => translation.locale_id === locale?.id
        );
    },
};
