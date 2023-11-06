import { useState } from "react";
import { reaction } from "mobx";

import { QueryKey, useQuery } from "react-query";

import { GetListFunction, ListFilter, Sort } from "../api/types";
import { ListResponse } from "../api";
import { usePaginationStore } from "../ui";

export function useList<D>(
    name: QueryKey,
    getList: GetListFunction<ListResponse<D>>
) {
    const paginationStore = usePaginationStore();

    const [page, setPage] = useState(paginationStore.getCurrentPage());
    const [pageSize, setPageSize] = useState(paginationStore.getPageSize());
    const [filters, setFilters] = useState<ListFilter[]>([]);
    const [sort, setSort] = useState<Sort | null>(null);

    reaction(
        () => ({
            currentPage: paginationStore.getCurrentPage(),
            pageSize: paginationStore.getPageSize(),
        }),
        ({ currentPage, pageSize }) => {
            setPage(currentPage);
            setPageSize(pageSize);
        }
    );

    const queryKeys = [name, page, pageSize, filters, sort];

    const query = useQuery(queryKeys, () =>
        getList({ page, size: pageSize, filters, sort })
    );

    return {
        applySort: setSort,
        applyFilters: setFilters,
        pagination: {
            page,
            size: pageSize,
        },
        data: query.data,
        ...query,
    };
}
