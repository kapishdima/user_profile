type MediaTranslatableEntity = {
    [key: string]: string;
};

export type MediaDomainEntity = {
    id: number;
    name?: MediaTranslatableEntity;
    compressedPath: string;
    path: string;
};

export type MediaResponseEntity = {
    id: number;
    name?: MediaTranslatableEntity;
    order?: number;
};

export type MediaResponseWithOrderEntity = {
    id: number;
    name?: MediaTranslatableEntity;
    order?: number;
    url: string;
};

export type MediaWithOrder = {
    media: MediaDomainEntity;
    name?: MediaTranslatableEntity;
    order?: number;
};
