import { UserResponseEntity } from "modules/user";

export type LoginResponse = {
    admin: UserResponseEntity;
    token: string;
};
