import { ApiRoutes, client } from "@/app/http";
import {
    EditEmailRequest,
    EditPersonalInfoRequest,
    EditPhoneRequest,
    UploadAvatarRequest,
    UploadDocumentRequest,
} from "../model/personal-info";

export const getProfile = async () => {
    const { data } = await client.get(ApiRoutes.GET_ME);

    return data.data;
};

export const editPersonalInfo = async (request: EditPersonalInfoRequest) => {
    const { data } = await client.put(ApiRoutes.EDIT_PERSONAL_INFO, request);

    return { data };
};

export const editPhone = async (request: EditPhoneRequest) => {
    const { data } = await client.put(ApiRoutes.EDIT_PHONE, request);

    return { data };
};

export const editEmail = async (request: EditEmailRequest) => {
    const { data } = await client.put(ApiRoutes.EDIT_EMAIL, request);

    return { data };
};

export const removeAccount = async () => {
    const { data } = await client.delete(ApiRoutes.REMOVE_ACCOUNT);

    return { data };
};

export const uploadDocuments = async (request: UploadDocumentRequest) => {
    const { data } = await client.postForm(ApiRoutes.UPLOAD_DOCUMENTS, request);

    return { data };
};

export const uploadAvatar = async (request: UploadAvatarRequest) => {
    console.log(request.avatar);
    const { data } = await client.postForm(ApiRoutes.UPLOAD_AVATAR, request);

    return { data };
};
