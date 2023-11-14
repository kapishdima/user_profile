import React from "react";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button/index";
import { useAuthStore } from "@/modules/auth";

import { useProfileStore } from "../../store/profile.store";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/app/config/routes";

export const ProfileRemoveButton: React.FC = () => {
    const removeAccount = useProfileStore((state) => state.removeAccount);
    const lougout = useAuthStore((state) => state.logout);
    const checkAuth = useAuthStore((state) => state.checkAuth);
    const loading = useProfileStore((state) => state.removeLoading);
    const navigate = useNavigate();

    const onConfirm = async () => {
        await removeAccount();
        navigate(AppRoutes.LOGIN);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" loading={loading}>
                    Удалить аккаунт
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Вы уверенные, что хотите удалить аккаунт?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Это действие не может быть отменено. Это приведет к
                        безвозвратному удалению вашей учетной записи и удалению
                        ваших данных с наших серверов.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>
                        {/* <Button
                            variant="destructive"
                            onClick={onConfirm}
                            loading={loading}
                            asChild
                        >
                        </Button> */}
                        Удалить
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
