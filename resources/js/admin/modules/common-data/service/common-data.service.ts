import { LocalesStore } from "modules/locales";
import { CommonDataEntity } from "modules/common-data";
import { UserStore, UserDomainEntity } from "modules/user";

export const CommonDataService = {
    getCommonData: (): CommonDataEntity => {
        return {
            locales: LocalesStore.getAllLocales(),
            generalLocale: LocalesStore.getGeneralLocale(),
            currentUser: UserStore.getUser(),
        };
    },
    getRequiredLocales: (): string[] => {
        const generalLocale = LocalesStore.getGeneralLocale();
        return [generalLocale.id];
    },
    getUser: (): UserDomainEntity => {
        return UserStore.getUser();
    },
};
