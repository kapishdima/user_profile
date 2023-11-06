import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

import { SettingsResponseEntity } from "../index";
import { createSuccessNotification } from "shared/ui";

type UpdateFunction = (
    id: string,
    settings: SettingsResponseEntity
) => Promise<void>;

export const useUpdateSettings = (update: UpdateFunction) => {
    const { id } = useParams<{ id: string }>();
    return useMutation(
        (settings: SettingsResponseEntity) => update(id, settings),
        {
            onSuccess: () => {
                createSuccessNotification({
                    title: "Налаштування успішно оновлено",
                });
            },
        }
    );
};
