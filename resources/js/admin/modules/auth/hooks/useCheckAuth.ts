import { AuthService } from "../services/auth.service";
import { useAuthStore } from "./useAuthStore";

export const useCheckAuth = () => {
    const authStore = useAuthStore();

    const checkAuth = async () => {
        const token = AuthService.getAuthToken();
        if (!token) {
            return authStore.setUnauthorized();
        }

        return authStore.setAuthorized();
    };

    return {
        checkAuth,
    };
};
