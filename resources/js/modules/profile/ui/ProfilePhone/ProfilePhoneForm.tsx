import React from "react";

import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { FormSection } from "@/components/ui/layout";
import { usePhoneVerificationCode } from "@/modules/auth";

import { Button } from "@/components/ui/button/index";

import { profilePhoneSchema } from "../../validation/personal-info.schema";
import { useProfileStore } from "../../store/profile.store";
import { ProfilePhoneVerification } from "./ProfilePhoneVerification";

export const ProfilePhoneForm: React.FC = () => {
    const profile = useProfileStore((state) => state.profile);
    const fetchProfile = useProfileStore((state) => state.fetchProfile);

    const editPhone = useProfileStore((state) => state.editPhone);
    const loading = useProfileStore((state) => state.editLoading);
    const verified = usePhoneVerificationCode((state) => state.verified);

    if (!profile) {
        return null;
    }

    const onSubmit = async (
        values: OnSubmitValues<typeof profilePhoneSchema>
    ) => {
        await editPhone(values);
        await fetchProfile();
    };

    const defaultValues: OnSubmitValues<typeof profilePhoneSchema> = {
        phone: profile.phone,
    };

    return (
        <div className="">
            <FormSection
                title="Номер телефона"
                subtitle="Здесь вы можете изменить ваш номер телефона"
            />
            <Form
                schema={profilePhoneSchema}
                defaultValues={defaultValues}
                handleSubmit={onSubmit}
            >
                <ProfilePhoneVerification />

                <Button loading={loading} disabled={!verified}>
                    Сохранить изменения
                </Button>
            </Form>
        </div>
    );
};
