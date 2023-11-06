import {
    toDomainEntity,
    UserDomainEntity,
    UserResponseEntity,
} from "../models";

import { UserStore } from "../store/user.store";

export const UserService = {
    saveUser: (user: UserResponseEntity) => {
        return UserStore.saveUser(toDomainEntity(user));
    },

    getUser: (): UserDomainEntity => {
        return UserStore.getUser();
    },

    deleteUser: () => {
        return UserStore.deleteUser();
    },
};
