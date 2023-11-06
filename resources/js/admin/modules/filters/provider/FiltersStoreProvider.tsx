import React from "react";
import { FiltersStore } from "../model/filters.store";

const filtersStore = new FiltersStore();
export const FiltersStoreContext = React.createContext<FiltersStore>(
    filtersStore
);

export const FiltersStoreProvider: React.FC<React.PropsWithChildren<
    unknown
>> = ({ children }) => {
    return (
        <FiltersStoreContext.Provider value={filtersStore}>
            {children}
        </FiltersStoreContext.Provider>
    );
};
