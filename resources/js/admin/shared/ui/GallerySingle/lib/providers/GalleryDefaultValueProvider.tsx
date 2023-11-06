import React, { useEffect } from "react";

import {
    MediaDomainEntity,
    MediaResponseEntity,
    MediaResponseWithOrderEntity,
    MediaService,
} from "modules/media";
import { useGalleryStore } from "../../hooks/useGalleryStore";
import { observer } from "mobx-react";
import { useControl } from "../../../../hooks";
import { useQuery } from "react-query";
import { Loading } from "../../../layout/Loading";
import { majorScale, Pane } from "evergreen-ui";

type GalleryDefaultValueProviderProps = {
    name: string;
};

export const GalleryDefaultValueProvider: React.FC<
    React.PropsWithChildren<GalleryDefaultValueProviderProps>
> = observer(({ name, children }) => {
    const galleryStore = useGalleryStore();
    const { getValues } = useControl();

    const defaultValue = getValues(name);

    const { data: media, isFetching } = useQuery<MediaDomainEntity>(
        [name, defaultValue],
        async () => {
            if (!defaultValue || typeof defaultValue === "object") {
                return;
            }
            return await MediaService.getMediaById(defaultValue);
        }
    );

    useEffect(() => {
        if (!defaultValue) {
            return;
        }

        if (typeof defaultValue === "object") {
            galleryStore.select({
                id: defaultValue.id,
                url: defaultValue.url,
            });
            return;
        }

        if (media) {
            galleryStore.select({
                id: media.id,
                url: media.path,
            });
        }
    }, [getValues()]);

    if (isFetching) {
        return (
            <Pane maxWidth="10%">
                <Loading minHeight={`${majorScale(4)}px`} />
            </Pane>
        );
    }

    return <>{children}</>;
});
