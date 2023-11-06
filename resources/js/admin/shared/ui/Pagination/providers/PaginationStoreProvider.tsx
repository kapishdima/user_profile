import React from "react";
import { PaginationStore } from "../pagination.store";

const paginationStore = new PaginationStore();
export const PaginationStoreContext = React.createContext<PaginationStore>(
  paginationStore
);

export const PaginationStoreProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <PaginationStoreContext.Provider value={paginationStore}>
      {children}
    </PaginationStoreContext.Provider>
  );
};
