import { MediaDomainEntity } from "../media-domain.entity";
import { MediaResponseEntity } from "../media-response.entity";

export const toDomainEntity =
    () =>
    (media: MediaResponseEntity): MediaDomainEntity => {
        return {
            id: media.id,
            name: media.name,
            compressedPath: media.compressed_path,
            path: media.path,
        };
    };
