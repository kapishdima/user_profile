export enum ApiRoutes {
    LOGIN = "/login",
    LOGOUT = "/logout",
    GET_ME = "/user",
    REGISTER = "/register",
    VERIFY_PHONE_CODE = "/register/verify-phone-code",
    SEND_PHONE_CODE = "/register/send-phone-code",
    VERIFY_EMAIL_CODE = "/register/verify-email-code",
    VERIFY_RESET_CODE = "/register/verify-reset-code",
    SEND_EMAIL_CODE = "/register/resend-email-code",

    GET_CACHED_PHONE = "/user/get-cached-phone",
    EDIT_PERSONAL_INFO = "/user/personal",
    EDIT_PHONE = "/user/phone",
    EDIT_EMAIL = "/user/email",
    REMOVE_ACCOUNT = "/user",

    UPLOAD_DOCUMENTS = "/user/documents",
    UPLOAD_AVATAR = "/user/avatar",

    RESET_PASSWORD = "/user/reset-password",
}
