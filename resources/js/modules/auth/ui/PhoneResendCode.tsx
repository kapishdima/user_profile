import React, { useEffect, useState } from "react";

import { ResendCode } from "@/components/ui/resend-code";

import { usePhoneVerificationCode } from "../store/phone-verification.store";
import { useFormContext } from "react-hook-form";
import { PHONE_RESEND_TIERS } from "@/app/constants/storage";

type PhoneResendCodeProps = {};

export const PhoneResendCode: React.FC<PhoneResendCodeProps> = () => {
    const form = useFormContext();
    const sendCode = usePhoneVerificationCode((state) => state.sendCode);
    const sended = usePhoneVerificationCode((state) => state.sended);

    const [tiers, setTiers] = useState(0);

    useEffect(() => {
        window.localStorage.setItem(PHONE_RESEND_TIERS, tiers.toString());
    }, [tiers]);

    return (
        <ResendCode
            shown={sended}
            send={async () => {
                await sendCode({ phone: form.getValues("phone") });
                setTiers((tier) => tier + 1);
            }}
        />
    );
};
