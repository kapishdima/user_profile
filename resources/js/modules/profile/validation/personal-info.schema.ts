import { MIN_FIRST_NAME, MIN_LAST_NAME } from "@/app/constants/validations";
import * as z from "zod";

export const personalInfoSchema = z.object({
    first_name: z.string().min(2, MIN_FIRST_NAME),
    last_name: z.string().min(2, MIN_LAST_NAME),
});

export const profileEmailSchema = z.object({
    email: z.string().email(),
});

export const profilePhoneSchema = z.object({
    phone: z.string(),
});

export const profileDocumentsSchema = z.object({
    documents: z.instanceof(File).array().nullable(),
});

export const profileAvatarSchema = z.object({
    avatar: z.instanceof(File).nullable(),
});
