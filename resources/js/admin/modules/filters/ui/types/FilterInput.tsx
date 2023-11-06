import React from "react";
import { TextInput, TextInputProps } from "evergreen-ui";
import { useFilterInput } from "../../hooks/useFilterInput";

type FilterInputProps = TextInputProps & {};

export const FilterInput: React.FC<FilterInputProps> = ({
    placeholder,
    name,
    ...props
}) => {
    const {
        value,
        isEditMode,
        onBlur,
        onChange,
        onClick,
        onKeyEnterPresssed,
    } = useFilterInput(name);

    // return isEditMode ? (
    //     <TextInput
    //         placeholder={placeholder}
    //         value={value}
    //         onChange={onChange}
    //         onBlur={onBlur}
    //         onKeyPress={onKeyEnterPresssed}
    //     />
    // ) : (
    //     <Button borderRadius="30px" onClick={onClick}>
    //         {value}
    //     </Button>
    // );

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyEnterPresssed}
        />
    );
};
