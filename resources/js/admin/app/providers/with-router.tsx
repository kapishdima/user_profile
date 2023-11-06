import React from "react";

import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: React.FunctionComponent<React.PropsWithChildren<any>>) => () => {
  return (
    <BrowserRouter basename="panels">
      <Component />
    </BrowserRouter>
  );
};
