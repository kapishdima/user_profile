import { User } from "@/modules/profile";

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    user: User;
    token: string;
};
