import { useMutation } from "react-query";
import { MediaService } from "modules/media";

export const useCreateMedia = () => {
    const { mutateAsync: createMedia, isLoading } = useMutation((file: File) =>
        MediaService.createMedia({ file })
    );

    return { createMedia, isLoading };
};
