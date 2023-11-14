import React from "react";
import { Dropzone } from "@/components/ui/dropzone";
import { Form, OnSubmitValues } from "@/components/ui/form/index";
import { FormSection } from "@/components/ui/layout";
import { Button } from "@/components/ui/button/index";

import { profileDocumentsSchema } from "../../validation/personal-info.schema";
import { useProfileStore } from "../../store/profile.store";
import { ProfileDocumentsList } from "./ProfileDocumentsList";

export const defaultValues: OnSubmitValues<typeof profileDocumentsSchema> = {
    documents: [],
};

export const ProfileDocumentsForm: React.FC = () => {
    const uploadDocuments = useProfileStore((state) => state.uploadDocuments);
    const fetchProfile = useProfileStore((state) => state.fetchProfile);
    const uploadLoading = useProfileStore((state) => state.uploadLoading);

    const onSubmit = async (
        values: OnSubmitValues<typeof profileDocumentsSchema>
    ) => {
        console.log(values);
        await uploadDocuments(values);
        await fetchProfile();
    };
    return (
        <div className="">
            <FormSection
                title="Документы для верификации (KYC)"
                subtitle="Управляйте загруженными документаци"
            />
            <ProfileDocumentsList />
            <Form
                handleSubmit={onSubmit}
                defaultValues={defaultValues}
                schema={profileDocumentsSchema}
            >
                <Dropzone name="documents" />
                <Button loading={uploadLoading}>Сохранить изменения</Button>
            </Form>
        </div>
    );
};
