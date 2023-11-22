import * as z from "zod";

import {
    INVALID_EMAIL,
    INVALID_PHONE,
    MAX_CODE,
    MIN_CODE,
    MIN_FIRST_NAME,
    MIN_LAST_NAME,
    MIN_PASSWORD,
    PASSWORD_MISMATCH,
} from "@/app/constants/validations";

export const loginSchema = z.object({
    email: z.string().email({ message: INVALID_EMAIL }),
    password: z.string().min(8, { message: MIN_PASSWORD }),
});

export const phoneVerificationSchema = z.object({
    phone: z.string().min(11, { message: INVALID_PHONE }),
    code: z.string(),
});

export const emailVerificationSchema = z.object({
    email: z.string().email({ message: INVALID_EMAIL }),
    phone: z.string(),
    code: z.string(),
});

export const codeVerificationSchema = z.object({
    code: z
        .string()
        .min(4, { message: MIN_CODE })
        .max(4, { message: MAX_CODE }),
});

export const signupSchame = z
    .object({
        email: z.string().email({ message: INVALID_EMAIL }),
        password: z.string().min(8, { message: MIN_PASSWORD }),
        passwordConfirmation: z.string().min(8, { message: MIN_PASSWORD }),
        terms_confirmed: z.literal<boolean>(true),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: PASSWORD_MISMATCH,
        path: ["passwordConfirmation"],
    });

export const resetPasswordSchema = z
    .object({
        password: z.string().min(8, { message: MIN_PASSWORD }),
        passwordConfirmation: z.string().min(8, { message: MIN_PASSWORD }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: PASSWORD_MISMATCH,
        path: ["passwordConfirmation"],
    });
