import { REQUIRED_MESSAGE } from "app/validation/messages";
import { object, string, number } from "yup";

export const mediaSchema = (requiredLocales) =>
    object({
        order: number().required(REQUIRED_MESSAGE),
        id: number().required(REQUIRED_MESSAGE),
        name: object(
            requiredLocales.reduce(
                (acc: any, locale: string) => ({
                    ...acc,
                    [locale]: string().nullable(),
                }),
                {}
            )
        ),
    });
