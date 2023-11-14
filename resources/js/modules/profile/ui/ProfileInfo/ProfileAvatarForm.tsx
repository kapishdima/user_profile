import React from "react";

import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { Button } from "@/components/ui/button/index";
import { Dropzone } from "@/components/ui/dropzone";

import { profileAvatarSchema } from "../../validation/personal-info.schema";
import { useProfileStore } from "../../store/profile.store";

export const ProfileAvatarForm: React.FC = () => {
    const uploadAvatar = useProfileStore((state) => state.uploadAvatar);
    const fetchProfile = useProfileStore((state) => state.fetchProfile);
    const profile = useProfileStore((state) => state.profile);
    const loading = useProfileStore((state) => state.uploadLoading);

    const onSubmit = async (
        values: OnSubmitValues<typeof profileAvatarSchema>
    ) => {
        await uploadAvatar(values);
        await fetchProfile();
    };

    if (!profile) {
        return null;
    }

    const defaultValues: OnSubmitValues<typeof profileAvatarSchema> = {
        avatar: null,
    };

    return (
        <div className="flex flex-col flex-1">
            <Form
                schema={profileAvatarSchema}
                defaultValues={defaultValues}
                handleSubmit={onSubmit}
            >
                <Dropzone name="avatar" multiple={false} />

                <Button type="submit" loading={loading}>
                    Загрузить
                </Button>
            </Form>
        </div>
    );
};
