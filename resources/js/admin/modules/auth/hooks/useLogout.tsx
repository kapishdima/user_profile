import { AuthService } from "../services/auth.service";
import { useMutation } from "react-query";

export const useLogout = (onLogoutSuccess: () => void) => {
    const { mutate: logout, isLoading, isSuccess, isIdle } = useMutation(
        () => AuthService.logout(),
        {
            onSuccess: onLogoutSuccess,
        }
    );

    return { logout, isLoading, isIdle, isSuccess };
};
