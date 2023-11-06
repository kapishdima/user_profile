import { object, array, number, string } from "yup";
import { REQUIRED_MESSAGE } from "app/validation/messages";

export const settingsSchema = (requiredLocales) =>
    object({
        html_head: string().nullable(),
        html_before_body: string().nullable(),
        html_after_footer: string().nullable(),
        instagram: string().nullable(),
        behance: string().nullable(),
        dribble: string().nullable(),
        lat: string().nullable(),
        lng: string().nullable(),
        phone: string().nullable(),
        email: string().nullable(),
        projects: array().of(
            object({
                id: number().required(REQUIRED_MESSAGE),
                order: number().required(REQUIRED_MESSAGE),
            })
        ),
    });
