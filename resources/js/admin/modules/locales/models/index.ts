import { LocaleDomainEntity } from "./locale-domain.entity";
import { LocaleResponseEntity } from "./locale-response.entity";

import { toDomainEntity } from "./mapper/locale.mapper";

export type { LocaleDomainEntity, LocaleResponseEntity };
export { toDomainEntity };
