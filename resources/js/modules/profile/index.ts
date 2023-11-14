import { ProfileAvatar } from "./ui/ProfileAvatar";
import { ProfileDetails } from "./ui/ProfileDetails";

import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { PersonalInfoPage } from "./pages/PersonalInfoPage";
import { ProfileEmailPage } from "./pages/ProfileEmailPage";
import { ProfilePhonePage } from "./pages/ProfilePhonePage";
import { ProfileActionsPage } from "./pages/ProfileActionsPage";
import { ProfileDocumentsPage } from "./pages/ProfileDocumentsPage";

import { useProfileStore } from "./store/profile.store";

import { User } from "./model/user";

export type { User };
export {
    useProfileStore,
    ProfileAvatar,
    ProfileSettingsPage,
    ProfileDetails,
    PersonalInfoPage,
    ProfileEmailPage,
    ProfilePhonePage,
    ProfileActionsPage,
    ProfileDocumentsPage,
};
