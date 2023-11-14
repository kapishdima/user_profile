export type EditPersonalInfoRequest = {
    first_name?: string;
    last_name?: string;
};

export type EditPhoneRequest = {
    phone?: string;
};

export type EditEmailRequest = {
    email?: string;
};

export type UploadDocumentRequest = {
    documents?: File[];
};

export type UploadAvatarRequest = {
    avatar?: File;
};
