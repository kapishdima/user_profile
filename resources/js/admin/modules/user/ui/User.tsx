import React, { useEffect, useState } from "react";
import {
    Pane,
    majorScale,
    Heading,
    LogOutIcon,
    Avatar,
    Button,
    Spinner,
} from "evergreen-ui";

import { useNavigateLogin } from "shared/hooks";

import { useAuthStore, useGetMe, useLogout } from "modules/auth";
import { observer } from "mobx-react";
import { useQuery } from "react-query";
import { Loading, useLayoutDimensions } from "shared/ui";

export const User: React.FC<React.PropsWithChildren<unknown>> = observer(() => {
    const navigateToLogin = useNavigateLogin();
    const authStore = useAuthStore();
    const [isFullButton, setIsFullButton] = useState(false);

    const { fetchUser } = useGetMe();
    const { data: user, isFetching } = useQuery("user", fetchUser);

    const onLogoutSuccess = () => {
        authStore.setUnauthorized();
        authStore.removeUser();
        navigateToLogin();
        return;
    };

    const { logout, isLoading } = useLogout(onLogoutSuccess);

    const { windowWidth } = useLayoutDimensions();

    useEffect(() => {
        setIsFullButton(windowWidth <= 1280);
    }, [windowWidth]);

    if (isFetching) {
        return <Loading />;
    }

    return (
        <Pane
            display="flex"
            flexDirection={isFullButton ? "column" : "row"}
            justifyContent="space-between"
            alignItems={isFullButton ? "flex-start" : "center"}
            marginLeft={majorScale(2)}
        >
            <Pane display="flex" wordBreak="break-word" alignItems="center">
                <Avatar name={user?.username} size={30} />
                <Heading marginLeft={majorScale(1)} size={200}>
                    {user?.username}
                </Heading>
            </Pane>
            {isFullButton ? (
                <Button
                    iconAfter={LogOutIcon}
                    isLoading={isLoading}
                    onClick={() => logout()}
                    marginTop={majorScale(1)}
                >
                    Logout
                </Button>
            ) : (
                <Button
                    appearance="minimal"
                    intent="none"
                    onClick={() => logout()}
                >
                    {isLoading ? (
                        <Spinner size={majorScale(2)} />
                    ) : (
                        <LogOutIcon size={majorScale(3)} />
                    )}
                </Button>
            )}
        </Pane>
    );
});
