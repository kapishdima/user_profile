import { create } from "zustand";
import { User } from "../model/user";
import {
    editEmail,
    editPersonalInfo,
    editPhone,
    getProfile,
    removeAccount,
    uploadAvatar,
    uploadDocuments,
} from "../api/profile.api";
import {
    EditEmailRequest,
    EditPersonalInfoRequest,
    EditPhoneRequest,
    UploadAvatarRequest,
    UploadDocumentRequest,
} from "../model/personal-info";
import { toast } from "@/components/ui/use-toast";

export type ProfileStore = {
    loading: boolean;
    editLoading: boolean;
    removeLoading: boolean;
    uploadLoading: boolean;
    profile: User | null;
    fetchProfile: () => void;
    editPersonalInfo: (request: EditPersonalInfoRequest) => void;
    editPhone: (request: EditPhoneRequest) => void;
    editEmail: (request: EditEmailRequest) => void;
    removeAccount: () => void;
    uploadDocuments: (request: UploadDocumentRequest) => void;
    uploadAvatar: (request: UploadAvatarRequest) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
    loading: false,
    editLoading: false,
    removeLoading: false,
    uploadLoading: false,
    profile: null,
    fetchProfile: async () => {
        set(() => ({
            loading: true,
        }));
        const profile = await getProfile();
        set(() => ({
            loading: false,
            profile,
        }));
    },
    editPersonalInfo: async (requst: EditPersonalInfoRequest) => {
        try {
            set(() => ({
                editLoading: true,
            }));
            await editPersonalInfo(requst);
            toast({ title: "Изменения успешно сохранены!" });
            set(() => ({
                editLoading: false,
            }));
        } catch (error) {
            toast({ title: "Что-то пошло не так!" });
        }
    },
    editPhone: async (requst: EditPhoneRequest) => {
        try {
            set(() => ({
                editLoading: true,
            }));
            await editPhone(requst);
            toast({ title: "Изменения успешно сохранены!" });
            set(() => ({
                editLoading: false,
            }));
        } catch (error) {
            toast({ title: "Что-то пошло не так!" });
        }
    },
    editEmail: async (requst: EditEmailRequest) => {
        try {
            set(() => ({
                editLoading: true,
            }));
            await editEmail(requst);
            toast({ title: "Изменения успешно сохранены!" });
            set(() => ({
                editLoading: false,
            }));
        } catch (error) {
            toast({ title: "Такой email уже существует!" });
        }
    },
    removeAccount: async () => {
        set(() => ({
            removeLoading: true,
        }));
        await removeAccount();
        set(() => ({
            removeLoading: false,
        }));
    },
    uploadDocuments: async (request: UploadDocumentRequest) => {
        try {
            set(() => ({
                uploadLoading: true,
            }));
            await uploadDocuments(request);
            set(() => ({
                uploadLoading: false,
            }));
        } catch (error) {
            set(() => ({
                uploadLoading: false,
            }));
        }
    },
    uploadAvatar: async (request: UploadAvatarRequest) => {
        try {
            set(() => ({
                uploadLoading: true,
            }));
            await uploadAvatar(request);
            set(() => ({
                uploadLoading: false,
            }));
        } catch (error) {
            set(() => ({
                uploadLoading: false,
            }));
        }
    },
}));
