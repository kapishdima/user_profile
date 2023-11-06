import compose from "../compose";

import { withErrors } from "./with-errors";
import { withQuery } from "./with-query";
import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";
import { withAuth } from "./with-auth";
import { withCommonData } from "./with-common-data";

export const withProviders = compose(
    withErrors,
    withTheme,
    withQuery,
    withRouter,
    withAuth,
    withCommonData
);
