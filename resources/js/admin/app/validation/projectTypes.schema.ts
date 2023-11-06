import { object, string } from "yup";
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

export const projectTypeSchema = (requiredLocales) =>
    object({
        name: translatableRequired(requiredLocales),
    });
