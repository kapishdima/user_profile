import { AuthService } from "../services/auth.service";

import { UserResponseEntity, UserService } from "modules/user";

export const useGetMe = () => {
    const fetchUser = async () => {
        try {
            const userFromStore = UserService.getUser();

            if (userFromStore) {
                return userFromStore;
            }

            const userFromApi: UserResponseEntity = await AuthService.getMe();
            const savedUser = UserService.saveUser(userFromApi);

            return savedUser;
        } catch (error) {
            if (error.status === 401) {
                return null;
            }
        }
    };

    return { fetchUser };
};
