import { object, string } from "yup";
import { REQUIRED_MESSAGE } from "app/validation/messages";

const translatableNullable = (requiredLocales) =>
    object(
        requiredLocales.reduce(
            (acc, locale) => ({
                ...acc,
                [locale]: string().nullable(),
            }),
            {}
        )
    );

export const seoDataSchema = (requiredLocales) =>
    object({
        title: translatableNullable(requiredLocales),
        description: translatableNullable(requiredLocales),
        keywords: translatableNullable(requiredLocales),
        og_title: translatableNullable(requiredLocales),
        og_description: translatableNullable(requiredLocales),
        media_id: string().nullable(),
        slug: string().required(REQUIRED_MESSAGE),
    });
