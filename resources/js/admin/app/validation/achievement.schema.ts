import { object, string, boolean } from "yup";
import { REQUIRED_MESSAGE } from "app/validation/messages";

const translatableRequired = (requiredLocales) =>
    object(
        requiredLocales.reduce(
            (acc, locale) => ({
                ...acc,
                [locale]: string().required(REQUIRED_MESSAGE),
            }),
            {}
        )
    );

export const achievementSchema = (requiredLocales) =>
    object({
        name: translatableRequired(requiredLocales),
        description: translatableRequired(requiredLocales),
        service: string().required(REQUIRED_MESSAGE),
        display: boolean().required(REQUIRED_MESSAGE),
    });
