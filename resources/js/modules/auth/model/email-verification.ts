export type VerificationEmailCode = {
    email?: string;
    phone?: string;
    code?: string;
};

export type SendEmailCodeRequest = {
    email?: string;
};
