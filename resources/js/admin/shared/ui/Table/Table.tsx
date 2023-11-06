import React from "react";

import { majorScale, Table, Pane, Spinner } from "evergreen-ui";
import { useTable, TableOptions } from "react-table";

import { TableOption } from "./types";
import { TableHeader, WithSort } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";

type AppTableProps = WithSort &
    TableOptions<any> & {
        options?: TableOption[];
        loading?: boolean;
        total: number;
    };

export const AppTable = ({
    columns,
    data,
    options,
    loading,
    total,
    onSort,
    useSort,
    sorted,
}: AppTableProps) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data: data || [],
            manualPagination: true,
            pageCount: total,
        });

    return (
        <>
            <Table {...getTableProps()}>
                <TableHeader
                    sorted={sorted}
                    headerGroups={headerGroups}
                    useSort={useSort}
                    onSort={onSort}
                />

                {loading ? (
                    <Pane
                        height="70vh"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Spinner size={24} />
                    </Pane>
                ) : (
                    <TableBody
                        rows={rows}
                        prepareRow={prepareRow}
                        options={options}
                        getTableBodyProps={getTableBodyProps}
                    />
                )}
            </Table>
            <Pane marginTop={majorScale(2)}>
                <TableFooter totalPages={total} />
            </Pane>
        </>
    );
};
