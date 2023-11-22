import { create } from "zustand";
import {
    sendVerificationEmailCode,
    verifyEmailCode,
    verifyResetCode,
} from "../api/auth.api";
import {
    SendEmailCodeRequest,
    VerificationEmailCode,
} from "../model/email-verification";
import { toast } from "@/components/ui/use-toast";
import { CACHED_EMAIL } from "@/app/constants/storage";

export type EmailVerificationStore = {
    sendingLoading: boolean;
    verificationLoading: boolean;
    sended: boolean;
    verified: boolean;
    sendCode: (request: any) => void;
    verifyCode: (request: VerificationEmailCode) => void;
    verifyResetCode: (request: VerificationEmailCode) => void;
};

export const useEmailVerificationCode = create<EmailVerificationStore>(
    (set) => ({
        sendingLoading: false,
        verificationLoading: false,
        sended: false,
        verified: false,
        sendCode: async (request: SendEmailCodeRequest) => {
            set(() => ({ sendingLoading: true }));
            const sended = await sendVerificationEmailCode(request);
            if (!sended) {
                toast({
                    title: "Такого email не существует!",
                    variant: "destructive",
                });
            }
            set(() => ({ sendingLoading: false, sended }));
        },
        verifyCode: async (request: VerificationEmailCode) => {
            set(() => ({ verificationLoading: true }));
            const verified = await verifyEmailCode(request);
            set(() => ({ verificationLoading: false, verified, sended: true }));
            if (verified) {
                toast({ title: "Email успешно подтвержден!" });
            } else {
                toast({
                    title: "Неверный код подтверждения!",
                    variant: "destructive",
                });
            }
        },
        verifyResetCode: async (request: VerificationEmailCode) => {
            set(() => ({ verificationLoading: true }));
            const verified = await verifyResetCode(request);
            set(() => ({ verificationLoading: false, verified, sended: true }));
            if (verified) {
                window.localStorage.setItem(CACHED_EMAIL, request.email);
                toast({ title: "Email успешно подтвержден!" });
            } else {
                toast({
                    title: "Неверный код подтверждения!",
                    variant: "destructive",
                });
            }
        },
    })
);
