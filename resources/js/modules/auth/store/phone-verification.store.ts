import { create } from "zustand";
import { VerificationPhoneCode } from "../model/phone-verification";
import { sendVerificationPhoneCode, verifyPhoneCode } from "../api/auth.api";
import { CACHED_PHONE } from "@/app/constants/storage";
import { toast } from "@/components/ui/use-toast";

export type PhoneVerificationStore = {
    sendingLoading: boolean;
    verificationLoading: boolean;
    sended: boolean;
    verified: boolean;
    sendCode: (request: VerificationPhoneCode) => void;
    verifyCode: (request: VerificationPhoneCode) => void;
};

export const usePhoneVerificationCode = create<PhoneVerificationStore>(
    (set) => ({
        sendingLoading: false,
        verificationLoading: false,
        sended: false,
        verified: false,
        sendCode: async (request: VerificationPhoneCode) => {
            set(() => ({ sendingLoading: true }));
            const sended = await sendVerificationPhoneCode(request);
            set(() => ({ sendingLoading: false, sended }));
            set(() => ({
                sendingLoading: false,
                sended: true,
            }));
        },
        verifyCode: async (request: VerificationPhoneCode) => {
            set(() => ({ verificationLoading: true }));
            const verified = await verifyPhoneCode(request);
            if (verified) {
                window.localStorage.setItem(CACHED_PHONE, request.phone);
                toast({ title: "Телефон успешно подтвержден!" });
            } else {
                toast({
                    title: "Неверный код подтверждения!",
                    variant: "destructive",
                });
            }
            set(() => ({
                verificationLoading: false,
                verified,
            }));
        },
    })
);
