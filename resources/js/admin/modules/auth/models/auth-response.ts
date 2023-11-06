import { UserResponseEntity } from "modules/user/models";
import { AuthStatusTypes } from "./auth-status";

export type AuthResponse = {
    status: AuthStatusTypes;
    user: UserResponseEntity;
};
