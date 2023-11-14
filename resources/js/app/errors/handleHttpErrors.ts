// import { AppRoutes } from "app/config/routes";
import { AppRoutes } from "app/config/routes";

type ErrorCode = 401 | 403 | 500;
type Error = {
    code: ErrorCode;
    message: string;
};

export const handleHttpErrors = (error: Error) => {
    switch (error.code) {
        case 401:
            {
                window.location.replace(`"/panels"/${AppRoutes.LOGIN}`);
            }
            break;
        case 403:
            break;
        case 500:
            break;
    }
};
