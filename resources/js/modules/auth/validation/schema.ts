import * as z from "zod";

import {
    EMAIL_INVALID,
    MIN_FIRST_NAME,
    MIN_LAST_NAME,
    PASSWORD_MISMATCH,
} from "@/app/constants/validations";

export const loginSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2),
});

export const phoneVerificationSchema = z.object({
    phone: z.string(),
    code: z.string(),
});

export const emailVerificationSchema = z.object({
    email: z.string(),
    phone: z.string(),
    code: z.string(),
});

export const signupSchame = z
    .object({
        first_name: z.string().min(2, { message: MIN_FIRST_NAME }),
        last_name: z.string().min(2, { message: MIN_LAST_NAME }),
        email: z.string().email({ message: EMAIL_INVALID }),
        password: z.string(),
        passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: PASSWORD_MISMATCH,
        path: ["passwordConfirmation"],
    });

export const resetPasswordSchema = z
    .object({
        password: z.string(),
        passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: PASSWORD_MISMATCH,
        path: ["passwordConfirmation"],
    });
