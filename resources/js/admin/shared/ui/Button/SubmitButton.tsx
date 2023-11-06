import React from "react";

import { Button, ButtonProps } from "evergreen-ui";

type SubmitButtonProps = ButtonProps & {
  text?: string;
};

export const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  text,
  ...props
}) => {
  return (
    <Button fontWeight="bold" appearance="primary" type="submit" {...props}>
      {text || "Відправити"}
    </Button>
  );
};
