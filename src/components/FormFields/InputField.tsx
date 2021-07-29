import { TextField } from "@material-ui/core";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps {
  name: string;
  control: Control<any>;
  type: string;

  placeholder?: string;
  label?: string;
  size?: "small" | "medium";
}

export const InputField = (props: InputFieldProps) => {
  const { name, control, placeholder, label, size, type = "text" } = props;

  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...field}
      label={label}
      variant='outlined'
      fullWidth
      size={size}
      placeholder={placeholder}
      type={type}
      error={invalid}
      helperText={error?.message}
      autoComplete='off'
    />
  );
};
