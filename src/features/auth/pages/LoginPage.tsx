import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { useAppDispatch } from "app/hooks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onLoggedIn = () => {
      const isLoggedIn = Boolean(localStorage.getItem("access_token"));
      if (isLoggedIn) {
        history.push("/admin");
      }
    };

    onLoggedIn();
  }, [history]);

  const handleLoginFormSubmit = (formValues: LoginPayload) => {
    const action = login(formValues);
    dispatch(action);
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
