import { SettingsAPI, ISettingsAPI } from "./api/settings.api";
import { SettingsDomainEntity, SettingsResponseEntity } from "./models";
import { SettingsService } from "./services/settings.service";
import { useUpdateSettings } from "./hooks/useUpdateSettings";
import { settingsSchema } from "./validation/settings.schema";
import { SettingsUpdateContent } from "./ui/Update/SettingsUpdate";

export type { ISettingsAPI, SettingsDomainEntity, SettingsResponseEntity };

export {
    SettingsAPI,
    SettingsService,
    useUpdateSettings,
    settingsSchema,
    SettingsUpdateContent,
};
