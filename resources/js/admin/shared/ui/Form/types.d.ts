import {
  UseFormGetValues,
  UseFormSetValue,
  FieldValues,
  Control,
  FormState,
  UseFormResetField,
  UseFormReset,
} from "react-hook-form";

export type OnSubmitFunction = (values) => void;
export type ChildrenFunction = (
  control: Control<FieldValues, object>
) => JSX.Element;

export type FormProps = {
  onSubmit: OnSubmitFunction;
  validationSchema?: any;
};

export type FormContextType = {
  control: Control<FieldValues, object>;
  state: FormState<any>;
  setValue: UseFormSetValue;
  getValues: UseFormSetValue;
  reset: UseFormReset;
};
