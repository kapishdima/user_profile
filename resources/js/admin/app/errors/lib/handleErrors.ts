import { createErrorNotification } from "../../../shared/ui";

const errorsRenderers = {
  401: () =>
    createErrorNotification({
      title: "User is unauthorized",
    }),
  403: () => {
    createErrorNotification({
      title: "This action allowed only super user",
    });
  },
  422: () => {
    createErrorNotification({
      title: "Unprocessable Content",
    });
  },
  500: () => {
    createErrorNotification({
      title: "Something went wrong!",
    });
  },
};

export const handleError = (error: any) => {
  if (!error?.status) {
    return createErrorNotification({
      title: "Щось пішло не так!",
    });
  }

  const status = error.status;
  return errorsRenderers[status]();
};
