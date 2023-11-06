import React from "react";

import { Pane } from "evergreen-ui";

import { PaginationSizeSelect } from "../Inputs/PaginationSizeSelect";
import { Pagination } from "../Pagination/Pagination";
import { observer } from "mobx-react";

type TableFooterProps = {
    totalPages: number;
};

export const TableFooter: React.FC<React.PropsWithChildren<TableFooterProps>> =
    observer(({ totalPages }) => {
        return (
            <Pane display="flex" alignItems="center">
                <Pagination totalPages={totalPages} />
                <PaginationSizeSelect
                    options={["5", "10", "15", "20", "50", "100"]}
                />
            </Pane>
        );
    });
