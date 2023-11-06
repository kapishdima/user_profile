import React from "react";

import { action, makeObservable, observable } from "mobx";

import { AuthStatusTypes } from "../models";
import { UserDomainEntity } from "modules/user/models";

export interface IAuthStore {
    getAuthorizationStatus: () => AuthStatusTypes;
    setAuthorized: () => void;
    setUnauthorized: () => void;
    setUser: (user: UserDomainEntity) => void;
    removeUser: () => void;
}

export class AuthStore implements IAuthStore {
    authorizationStatus: AuthStatusTypes = null;
    user: UserDomainEntity = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            authorizationStatus: observable,
            setAuthorized: action("Set authorized status"),
            setUnauthorized: action("Set unauthorized status"),
            setUser: action("Set user from store or api"),
            removeUser: action("Remove user"),
        });
    }

    setAuthorized() {
        this.authorizationStatus = AuthStatusTypes.AUTHORIZED;
        return true;
    }
    setUnauthorized() {
        this.authorizationStatus = AuthStatusTypes.UNAUTHORIZED;
        return false;
    }

    setUser(user: UserDomainEntity) {
        this.user = user;
    }

    removeUser() {
        this.user = null;
    }

    getAuthorizationStatus() {
        return this.authorizationStatus;
    }
}

export const authStoreContext = React.createContext(new AuthStore());
