import { UserResponseEntity, UserDomainEntity } from "../models";

export interface IUserStore {
    saveUser: (user: UserDomainEntity) => UserDomainEntity;
    getUser: () => UserDomainEntity;
    deleteUser: () => void;
}
const USER_STORE_KEY = "test/user";

export const UserStore: IUserStore = {
    saveUser: (user: UserDomainEntity): UserDomainEntity => {
        localStorage.setItem(USER_STORE_KEY, JSON.stringify(user));

        return UserStore.getUser();
    },

    getUser: (): UserDomainEntity => {
        return JSON.parse(localStorage.getItem(USER_STORE_KEY));
    },

    deleteUser: () => {
        return localStorage.removeItem(USER_STORE_KEY);
    },
};
