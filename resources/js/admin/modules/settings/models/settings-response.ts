type ProjectEntity = {
    id: number;
    order: number;
};

export type SettingsResponseEntity = {
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
