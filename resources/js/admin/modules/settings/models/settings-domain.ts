type ProjectEntity = {
    id: number;
    order: number;
};

export type SettingsDomainEntity = {
    id: number;
    html_before_body?: string;
    html_after_body?: string;
    html_after_footer?: string;
    phone?: string;
    email?: string;
    instagram?: string;
    dribbble?: string;
    behance?: string;
    projects: ProjectEntity[];
    lat?: string;
    lng?: string;
};
