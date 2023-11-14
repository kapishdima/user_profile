import { useMutation } from "react-query";

type QueryFn = (...args: any) => Promise<any>;

type UseMutateOptions = {
    successText: string;
};

export const useMutate = (
    key: string,
    queryFn: QueryFn,
    { successText }: UseMutateOptions
) => {
    const { mutate, isLoading } = useMutation(key, queryFn, {
        onSuccess: () => {},
        onError: (error: any) => {},
    });

    return { mutate, isLoading };
};
