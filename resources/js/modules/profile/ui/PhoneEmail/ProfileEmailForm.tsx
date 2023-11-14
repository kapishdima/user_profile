import React from "react";

import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { FormSection } from "@/components/ui/layout";
import { useEmailVerificationCode } from "@/modules/auth";
import { Button } from "@/components/ui/button/index";

import { profileEmailSchema } from "../../validation/personal-info.schema";
import { useProfileStore } from "../../store/profile.store";
import { ProfileEmailVerification } from "./ProfileEmailVerification";

export const ProfileEmailForm: React.FC = () => {
    const profile = useProfileStore((state) => state.profile);
    const fetchProfile = useProfileStore((state) => state.fetchProfile);

    const editEmail = useProfileStore((state) => state.editEmail);
    const loading = useProfileStore((state) => state.editLoading);
    const verified = useEmailVerificationCode((state) => state.verified);

    if (!profile) {
        return null;
    }

    const onSubmit = async (
        values: OnSubmitValues<typeof profileEmailSchema>
    ) => {
        await editEmail(values);
        await fetchProfile();
    };

    const defaultValues: OnSubmitValues<typeof profileEmailSchema> = {
        email: profile.email,
    };

    return (
        <div className="">
            <FormSection
                title="Электронная почта"
                subtitle="Здесь вы можете изменить вашу электронная почту"
            />
            <Form
                schema={profileEmailSchema}
                defaultValues={defaultValues}
                handleSubmit={onSubmit}
            >
                <ProfileEmailVerification />

                <Button loading={loading} disabled={!verified}>
                    Сохранить изменения
                </Button>
            </Form>
        </div>
    );
};
