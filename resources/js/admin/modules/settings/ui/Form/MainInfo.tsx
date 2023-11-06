import React from "react";
import { majorScale, Pane } from "evergreen-ui";
import { TabPane, TextInput } from "shared/ui";

export const MainInfo: React.FC = () => {
    return (
        <TabPane index={0} tab="Основна інформація">
            <Pane width="70%" marginTop={majorScale(4)}>
                <TextInput name="instagram" label="Посилання на Instagram" />
                <TextInput name="dribbble" label="Посилання на Dribbble" />
                <TextInput name="behance" label="Посилання на Behance" />

                <TextInput name="phone" label="Телефон" />
                <TextInput name="email" label="Електронна пошта" />
                <TextInput name="lat" label="Координати ширини" />
                <TextInput name="lng" label="Координати довжини" />
            </Pane>
        </TabPane>
    );
};
