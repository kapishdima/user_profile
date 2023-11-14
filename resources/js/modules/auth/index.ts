import { LoginPage } from "./pages/LoginPage";
import { SignUpPhoneVerificationPage } from "./pages/SignUpPhoneVerificationPage";
import { SignUpPage } from "./pages/SignUpPage";
import { EmailVerificationPage } from "./pages/EmailVerificationPage";
import { TwoFactorAuthPage } from "./pages/TwoFactorAuthPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { EmailVerificationResetPage } from "./pages/EmailVerificationResetPage";

import { getToken } from "./api/auth.api";
import { useAuthStore } from "./store/auth.store";
import { usePhoneVerificationCode } from "./store/phone-verification.store";
import { useEmailVerificationCode } from "./store/email-verification.store";

export {
    getToken,
    usePhoneVerificationCode,
    useEmailVerificationCode,
    TwoFactorAuthPage,
    EmailVerificationPage,
    LoginPage,
    useAuthStore,
    SignUpPhoneVerificationPage,
    SignUpPage,
    ResetPasswordPage,
    EmailVerificationResetPage,
};
