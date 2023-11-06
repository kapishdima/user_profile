import React from "react";
import { PaginationView } from "./PaginationView";
import { PaginationStoreProvider } from "./providers/PaginationStoreProvider";

type PaginationProps = {
  totalPages: number;
};

export const Pagination: React.FC<React.PropsWithChildren<PaginationProps>> = ({ totalPages }) => {
  return (
    <PaginationStoreProvider>
      <PaginationView totalPages={totalPages} />
    </PaginationStoreProvider>
  );
};
