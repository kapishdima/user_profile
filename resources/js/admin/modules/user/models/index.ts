import { UserDomainEntity } from "./user-domain";
import { UserResponseEntity } from "./user-response";

import { toDomainEntity } from "./mapper/user.mapper";

export type { UserDomainEntity, UserResponseEntity };
export { toDomainEntity };
