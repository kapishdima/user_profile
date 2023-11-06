import React, { useEffect } from "react";

import { useGalleryStore } from "../../hooks/useGalleryStore";

import { sortBy } from "lodash";
import { useControl } from "../../../../hooks";

type GalleryDefaultValueProviderProps = {
    name: string;
};

export const GalleryDefaultValueProvider: React.FC<React.PropsWithChildren<GalleryDefaultValueProviderProps>> = ({
    name,
    children,
}) => {
    const galleryStore = useGalleryStore();
    const { getValues } = useControl();

    const defaultValues = getValues(name);

    useEffect(() => {
        if (Array.isArray(defaultValues)) {
            const orderedDefaultValues = sortBy(defaultValues, ["order"]);
            orderedDefaultValues.forEach((image) => {
                galleryStore.select({ id: image.id, url: image.url });
            });
        }
    }, [getValues()]);

    if (!defaultValues || !defaultValues?.length) {
        return <>{children}</>;
    }

    return <>{children}</>;
};
