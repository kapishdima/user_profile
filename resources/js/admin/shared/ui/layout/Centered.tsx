import React from "react";

import { Pane } from "evergreen-ui";

type CenteredProps = {
  minHeight?: string;
  minWidth?: string;
};

export const Centered: React.FC<React.PropsWithChildren<CenteredProps>> = ({
  children,
  minHeight,
  minWidth,
}) => {
  return (
    <Pane
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={minHeight || "50vh"}
      minWidth={minWidth}
    >
      <>{children}</>
    </Pane>
  );
};
