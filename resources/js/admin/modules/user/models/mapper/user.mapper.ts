import { UserDomainEntity } from "../user-domain";
import { UserResponseEntity } from "../user-response";

export const toDomainEntity = (user: UserResponseEntity): UserDomainEntity => {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
    };
};
