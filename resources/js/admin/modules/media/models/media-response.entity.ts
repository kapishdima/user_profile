type MediaTranslatableEntity = {
    [key: string]: string;
};

export type MediaResponseEntity = {
    id: number;
    name?: MediaTranslatableEntity;
    order?: number;
    compressed_path: string;
    path: string;
};
