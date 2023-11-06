export type ListFilter = { [key: string]: string };

export type SortType = "desc" | "asc";

export type Sort = {
    by: string;
    type: SortType;
};

export type GetListOptions = {
    page?: number;
    size?: number;
    filters?: ListFilter[];
    sort?: Sort;
};
export type GetListFunction<D> = (options: GetListOptions) => D | Promise<D>;

export type Error = {
    data: {
        error: string;
    };
};
