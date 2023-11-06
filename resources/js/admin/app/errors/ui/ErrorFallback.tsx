import React from "react";

import { CornerDialog, Heading } from "evergreen-ui";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback: React.FC<React.PropsWithChildren<FallbackProps>> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <CornerDialog
      title={
        <Heading is="h4" size={600} color="#D14343">
          Щось пішло не так!
        </Heading>
      }
      isShown
      hasCancel={false}
      intent="danger"
      confirmLabel="Спробуйте ще раз"
      onConfirm={resetErrorBoundary}
    >
      {error.message}
    </CornerDialog>
  );
};
