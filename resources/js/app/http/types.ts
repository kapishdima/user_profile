export type JsonResponse<T = any> = {
    data?: T;
    message: string;
    success: boolean;
};

export type Media = {
    id: number;
    path: string;
    compressed_path: string;
};
