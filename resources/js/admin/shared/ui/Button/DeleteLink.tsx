import React from "react";

import { Button, ButtonProps, TrashIcon } from "evergreen-ui";

type DeleteLinkProps = ButtonProps & {
  text?: string;
};

export const DeleteLink: React.FC<React.PropsWithChildren<DeleteLinkProps>> = (props) => {
  return (
    <Button
      appearance="primary"
      intent="danger"
      iconAfter={TrashIcon}
      {...props}
    >
      {props.text || "Видалити"}
    </Button>
  );
};
