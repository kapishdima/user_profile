import React, { useState } from "react";

import { HeaderGroup, TableInstance } from "react-table";
import {
    majorScale,
    Pane,
    SortAscIcon,
    SortDescIcon,
    Table,
} from "evergreen-ui";

import { Sort, SortType } from "shared/api/types";
import { snakeCase } from "lodash";

export type OnSort = (sort: Sort) => void;
export type WithSort = {
    onSort?: OnSort;
    useSort?: boolean;
    sorted?: string[];
};

type TableHeaderProps = Pick<TableInstance<any>, "headerGroups"> & WithSort;

type TableHeaderCellProps = WithSort & {
    column: HeaderGroup;
};

export const TableHeader: React.FC<
    React.PropsWithChildren<TableHeaderProps>
> = ({ headerGroups, onSort, useSort = true, sorted }) => {
    return (
        <Table.Head>
            {headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column: HeaderGroup) => (
                    <TableHeaderCell
                        column={column}
                        onSort={onSort}
                        useSort={useSort}
                        sorted={sorted}
                    />
                ))
            )}
        </Table.Head>
    );
};

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
    column,
    sorted,
    onSort,
}) => {
    const [sortType, setSortType] = useState<SortType>("desc");
    const useSort = sorted.includes(column.id);
    const cursor = useSort ? "pointer" : "default";

    return (
        <Table.HeaderCell
            {...column.getHeaderProps()}
            width={column.width}
            minWidth={column.minWidth}
            maxWidth={column.maxWidth}
            cursor={cursor}
            onClick={() => {
                if (useSort && typeof onSort === "function") {
                    setSortType((type) => (type === "desc" ? "asc" : "desc"));
                    onSort({ by: snakeCase(column.id), type: sortType });
                }
            }}
        >
            {column.render("Header")}
            {useSort && (
                <Pane marginLeft={majorScale(1)}>
                    {sortType === "asc" ? <SortAscIcon /> : <SortDescIcon />}
                </Pane>
            )}
        </Table.HeaderCell>
    );
};
