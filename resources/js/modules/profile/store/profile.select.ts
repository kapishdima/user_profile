import { ProfileStore } from "./profile.store";

export const getProfileAvatarName = (state: ProfileStore) => {
    if (!state.profile) {
        return "";
    }

    const firstName = state.profile.firstName;
    const lastName = state.profile.lastName;

    if (!firstName || !lastName) {
        return "";
    }

    return `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`;
};
