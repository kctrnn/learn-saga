import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { LoginPayload } from "../authSlice";
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

  const handleLoginFormSubmit = (formValues: LoginPayload) => {
    console.log(formValues);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box textAlign='center' mb={4}>
          <Typography component='h1' variant='h5' color='primary' gutterBottom>
            Welcome Back
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
