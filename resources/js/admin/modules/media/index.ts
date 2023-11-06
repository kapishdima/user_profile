import { MediaAPI } from "./api/media.api";
import { MediaService } from "./service/media.service";

import {
    MediaWithOrder,
    MediaResponseWithOrderEntity,
    MediaDomainEntity,
    MediaResponseEntity,
    toDomainEntity,
} from "./models";

import { useCreateMedia } from "./hook/useCreateMedia";

import { mediaSchema } from "./validation/media.schema";

export type {
    MediaDomainEntity,
    MediaWithOrder,
    MediaResponseEntity,
    MediaResponseWithOrderEntity,
};
export { MediaAPI, MediaService, toDomainEntity, useCreateMedia, mediaSchema };
