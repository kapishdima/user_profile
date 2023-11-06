import React from "react";
import { Autocomplete, FormField, majorScale, TextInput } from "evergreen-ui";

import { useCommonDataContext } from "app/hooks";
import { useControl } from "shared/hooks";
import { Input } from "shared/ui";

type ProjectInputProps = {
    items: any[];
    index: number;
};

export const ProjectInput: React.FC<ProjectInputProps> = ({ items, index }) => {
    const { setValue } = useControl();
    const { generalLocale } = useCommonDataContext();

    const searchItemId = (changedItem: string) => {
        const selectedItem = items?.filter(
            (item) => item.name[generalLocale.id] === changedItem
        );

        selectedItem.map((el) => (el.order = index));

        setValue(`projects.${index}`, ...selectedItem);
    };

    return (
        <FormField
            isRequired={true}
            label={`Проект ${index + 1}`}
            marginTop={majorScale(1)}
            marginBottom={majorScale(2)}
        >
            <Autocomplete
                onChange={(changedItem) => searchItemId(changedItem)}
                items={items?.map((item) => item.name[generalLocale.id]) || []}
            >
                {(props) => {
                    const { getRef, openMenu } = props;

                    return (
                        <Input
                            name={`projects.${index}.name.${[
                                generalLocale.id,
                            ]}`}
                        >
                            {({ field, fieldState }) => {
                                const isInvalid =
                                    fieldState.isTouched &&
                                    Boolean(fieldState.error);

                                return (
                                    <div ref={getRef}>
                                        <TextInput
                                            ref={field.ref}
                                            name={`projects.${index}.name.${[
                                                generalLocale.id,
                                            ]}`}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            onFocus={() => openMenu()}
                                            value={field.value}
                                            style={{
                                                borderColor:
                                                    isInvalid && "#D14343",
                                            }}
                                        />
                                    </div>
                                );
                            }}
                        </Input>
                    );
                }}
            </Autocomplete>
        </FormField>
    );
};
