export type SignupRequest = {
    fist_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
};

export type SignupResponse = {
    success: boolean;
};
