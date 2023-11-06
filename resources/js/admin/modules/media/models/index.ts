import { MediaDomainEntity } from "./media-domain.entity";
import { MediaResponseEntity } from "./media-response.entity";

import { toDomainEntity } from "./mapper/media.mapper";
import { CreateMediaDTO } from "./create-media.dto";

import {
    MediaWithOrder,
    MediaResponseWithOrderEntity,
} from "./media-domain.entity";

export type {
    MediaDomainEntity,
    MediaWithOrder,
    MediaResponseWithOrderEntity,
    MediaResponseEntity,
    CreateMediaDTO,
};
export { toDomainEntity };
