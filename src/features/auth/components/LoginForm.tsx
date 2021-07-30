import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { useAppSelector } from "app/hooks";
import { InputField } from "components/FormFields";
import { useForm } from "react-hook-form";
import { LoginPayload } from "../authSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export interface LoginFormProps {
  onSubmit?: (formValues: LoginPayload) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const classes = useStyles();

  const isLogging = useAppSelector((state) => state.auth.logging);

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = (formValues: LoginPayload) => {
    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField
        control={control}
        name='email'
        type='email'
        label='Email'
        placeholder='Enter your email'
      />

      <InputField
        control={control}
        name='password'
        type='password'
        label='Password'
        placeholder='Enter your password'
      />

      <Button
        variant='contained'
        color='primary'
        size='large'
        type='submit'
        fullWidth
        disabled={isLogging}
      >
        {isLogging && <CircularProgress size={24} color='primary' />} &nbsp;
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
