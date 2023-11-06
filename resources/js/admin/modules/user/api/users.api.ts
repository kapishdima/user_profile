import { UserDomainEntity } from "../models";
import { IAPIClient } from "shared/api";
import { clientAxios } from "app/http/client";

export const UsersAPI = {
    getUsers: async (): Promise<UserDomainEntity[]> => {
        const { data: users } = await clientAxios().get<UserDomainEntity[]>(
            "/api/admin"
        );

        return users;
    },
};
