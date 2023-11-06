import { LocaleResponseEntity } from "../locale-response.entity";

export const toDomainEntity = (locale: LocaleResponseEntity) => ({
    id: locale.id,
    locale: locale.locale,
    name: locale.name,
});
