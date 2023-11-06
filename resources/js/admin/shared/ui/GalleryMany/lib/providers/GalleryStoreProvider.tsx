import React from "react";

import { GalleryManyStore } from "../../store/gallery.store";

export const GalleryStoreContext = React.createContext<GalleryManyStore>(null);

export const GalleryStoreProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const galleryStore = new GalleryManyStore();
  return (
    <GalleryStoreContext.Provider value={galleryStore}>
      {children}
    </GalleryStoreContext.Provider>
  );
};
