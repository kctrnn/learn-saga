import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        variant='outlined'
        fullWidth
        placeholder='Enter your email'
        type='email'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <EmailIcon color='primary' />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        variant='outlined'
        fullWidth
        placeholder='Enter your password'
        type='password'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LockIcon color='primary' />
            </InputAdornment>
          ),
        }}
      />

      <Button variant='contained' color='primary' size='large' fullWidth>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
