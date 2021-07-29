import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { useAppDispatch } from "app/hooks";
import { login, LoginPayload } from "../authSlice";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    maxWidth: "500px",
    padding: theme.spacing(6),
    borderRadius: "8px",

    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginFormSubmit = (formValues: LoginPayload) => {
    const action = login(formValues);
    dispatch(action);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box textAlign='center' mb={4}>
          <Typography component='h1' variant='h5' color='primary' gutterBottom>
            🏫 Student Management
          </Typography>

          <Typography color='textSecondary'>
            Enter your credentials to access your account.
          </Typography>
        </Box>

        <LoginForm onSubmit={handleLoginFormSubmit} />
      </Paper>
    </div>
  );
}

export default LoginPage;
