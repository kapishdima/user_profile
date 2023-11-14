import React from "react";

import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { FormSection } from "@/components/ui/layout";
import { Button } from "@/components/ui/button/index";

import { personalInfoSchema } from "../../validation/personal-info.schema";
import { TextInput } from "@/components/ui/fields";

import { useProfileStore } from "../../store/profile.store";
import { ProfileAvatarForm } from "./ProfileAvatarForm";

export const PersonalInfoForm: React.FC = () => {
    const editPersonalInfo = useProfileStore((state) => state.editPersonalInfo);
    const fetchProfile = useProfileStore((state) => state.fetchProfile);
    const profile = useProfileStore((state) => state.profile);
    const loading = useProfileStore((state) => state.editLoading);

    const onSubmit = async (
        values: OnSubmitValues<typeof personalInfoSchema>
    ) => {
        await editPersonalInfo(values);
        await fetchProfile();
    };

    if (!profile) {
        return null;
    }

    const defaultValues: OnSubmitValues<typeof personalInfoSchema> = {
        first_name: profile.firstName || "",
        last_name: profile.lastName || "",
    };

    return (
        <div className="w-full flex lg:flex-row flex-col lg:items-end items-center lg:gap-x-10 gap-y-4">
            <div className="">
                <FormSection
                    title="Личная информация"
                    subtitle="Управляйте настройками вашей личной информацией"
                />
                <Form
                    schema={personalInfoSchema}
                    defaultValues={defaultValues}
                    handleSubmit={onSubmit}
                >
                    <TextInput name="first_name" label="Имя" />
                    <TextInput name="last_name" label="Фамилия" />

                    <Button loading={loading}>Сохранить изменения</Button>
                </Form>
            </div>
            <ProfileAvatarForm />
        </div>
    );
};
