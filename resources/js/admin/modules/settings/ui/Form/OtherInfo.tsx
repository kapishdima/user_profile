import React from "react";

import { Pane } from "evergreen-ui";
import { TabPane, CodeInput } from "shared/ui";

export const OtherInfo: React.FC = () => {
    return (
        <TabPane index={2} tab="Html код">
            <Pane width="70%">
                <CodeInput name="html_before_body" label="HTML before body" />
                <CodeInput name="html_after_body" label="HTML after body" />
                <CodeInput name="html_after_footer" label="HTML after footer" />
            </Pane>
        </TabPane>
    );
};
