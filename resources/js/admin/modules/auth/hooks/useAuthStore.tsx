import React from "react";
import { authStoreContext } from "../store/auth.api";

export const useAuthStore = () => {
    return React.useContext(authStoreContext);
};
