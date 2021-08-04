import { Box, Button, CircularProgress } from "@material-ui/core";
import { useAppSelector } from "app/hooks";
import {
  InputField,
  RadioGroupField,
  SelectField,
} from "components/FormFields";
import { selectCityOptions } from "features/city/citySlice";
import { Student } from "models";
import { useForm } from "react-hook-form";

export interface StudentFormProps {
  onSubmit?: (formValues: Student) => void;
  initialValues?: Student;
}

function StudentForm({ onSubmit, initialValues }: StudentFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Student>({
    defaultValues: initialValues,
  });

  const cityOptions = useAppSelector(selectCityOptions);

  const handleFormSubmit = async (formValues: Student) => {
    try {
      await onSubmit?.(formValues);
    } catch (error) {
      console.log("Failed to add/edit student");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField control={control} name='name' label='Full name' />

      <RadioGroupField
        name='gender'
        control={control}
        options={[
          { label: "Female", value: "female" },
          { label: "Male", value: "male" },
        ]}
      />

      <InputField name='age' control={control} label='Age' type='number' />
      <InputField name='mark' control={control} label='Mark' type='number' />

      <SelectField
        name='city'
        control={control}
        options={cityOptions}
        label='City'
      />

      <Box mt={2}>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          disabled={isSubmitting}
        >
          {isSubmitting && <CircularProgress size={24} color='primary' />}{" "}
          &nbsp; Save
        </Button>
      </Box>
    </form>
  );
}

export default StudentForm;
