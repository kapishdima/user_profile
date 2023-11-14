import { useQuery } from "react-query";

type QueryFn = (...args: any) => Promise<any>;

export const useFetch = (key: string, queryFn: QueryFn) => {
    const { data, isLoading } = useQuery(key, queryFn);

    return { data, isLoading };
};
