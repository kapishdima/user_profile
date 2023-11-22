import React from "react";

import { ResendCode } from "@/components/ui/resend-code";
import { useEmailVerificationCode } from "../store/email-verification.store";

type EmailResendCodeProps = {
    email: string;
};

export const EmailResendCode: React.FC<EmailResendCodeProps> = ({ email }) => {
    const sendCode = useEmailVerificationCode((state) => state.sendCode);
    const sended = useEmailVerificationCode((state) => state.sended);

    return <ResendCode sended={sended} send={() => sendCode({ email })} />;
};
