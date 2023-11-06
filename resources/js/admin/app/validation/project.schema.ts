import { object, string, number } from "yup";
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

const seoDataObject = (requiredLocales) =>
    object({
        title: translatableRequired(requiredLocales),
        description: translatableRequired(requiredLocales),
        og_title: translatableRequired(requiredLocales),
        keywords: translatableRequired(requiredLocales),
        og_description: translatableRequired(requiredLocales),
        media_id: number().required(REQUIRED_MESSAGE),
    });

export const projectSchema = (requiredLocales) =>
    object({
        name: translatableRequired(requiredLocales),
        description: translatableRequired(requiredLocales),
        media_id: number().required(REQUIRED_MESSAGE),
        order: string().nullable(),
        // tags: number().required(REQUIRED_MESSAGE),
        // projectTypes: number().required(REQUIRED_MESSAGE),
        seoData: seoDataObject(requiredLocales),
    });
