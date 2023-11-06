import { mediaSchema } from "./media.schema";
import { settingsSchema } from "./settings.schema";
import { tagSchema } from "./tag.schema";
import { projectTypeSchema } from "./projectTypes.schema";
import { seoDataSchema } from "./seoData.schema";
import { achievementSchema } from "./achievement.schema";
import { projectSchema } from "./project.schema";

const schemes = {
    tag: tagSchema,
    project: projectSchema,
    projectType: projectTypeSchema,
    media: mediaSchema,
    achievement: achievementSchema,
    seoData: seoDataSchema,
    settings: settingsSchema,
};

export const createValidationSchema = (
    requiredLocales,
    schemaName,
    user?: string
) => {
    if (!schemes[schemaName]) {
        throw new Error(`Schema ${schemaName} not found`);
    }
    return schemes[schemaName](requiredLocales, user);
};
