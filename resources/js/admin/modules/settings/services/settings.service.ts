import { SettingsResponseEntity, SettingsAPI } from "modules/settings";

export const SettingsService = {
    getSettings: async (id: string): Promise<any> => {
        const { data: settingsFromApi } = await SettingsAPI.getSettings(id);

        return settingsFromApi;
    },

    updateSettings: async (id: string, settings: SettingsResponseEntity) => {
        return await SettingsAPI.updateSettings(id, settings);
    },
};
