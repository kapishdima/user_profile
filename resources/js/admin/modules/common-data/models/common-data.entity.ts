import { LocaleDomainEntity } from "modules/locales";
import { UserDomainEntity } from "modules/user";

export type CommonDataEntity = {
    locales: LocaleDomainEntity[];
    generalLocale: LocaleDomainEntity;
    currentUser: UserDomainEntity;
};
