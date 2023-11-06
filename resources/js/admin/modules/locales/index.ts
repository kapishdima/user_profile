import { LocalesAPI, ILocalesAPI } from "./api/locales.api";
import { useLocales } from "./hooks/useLocales";

import {
    LocaleResponseEntity,
    LocaleDomainEntity,
    toDomainEntity,
} from "./models";

import { LocalesStore, ILocalesStore } from "./store/locales.store";
import { LocalesService } from "./services/locales.service";

export type {
    ILocalesAPI,
    LocaleDomainEntity,
    LocaleResponseEntity,
    ILocalesStore,
};

export { LocalesAPI, useLocales, toDomainEntity, LocalesStore, LocalesService };
