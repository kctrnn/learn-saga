import { Box, Chip, makeStyles, Paper, Typography } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { useAppDispatch } from "app/hooks";
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
  const dispatch = useAppDispatch();

  const history = useHistory();

  // redirect to admin page if is logged in
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (isLoggedIn) {
    history.push("/admin/dashboard");
  }

  const handleLoginFormSubmit = (formValues: LoginPayload) => {
    const action = login(formValues);
    dispatch(action);
  };

  const handleLoginAsClick = () => {
    handleLoginFormSubmit({
      email: "test@gmail.com",
      password: "test123",
    });
  };

  const initialValues: LoginPayload = {
    email: "",
    password: "",
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

        <LoginForm
          onSubmit={handleLoginFormSubmit}
          initialValues={initialValues}
        />

        <Box textAlign='center'>
          <Chip
            icon={<FaceIcon />}
            label='Login as Bruh'
            onClick={handleLoginAsClick}
            variant='outlined'
          />{" "}
          &nbsp;
          <Chip
            icon={<FaceIcon />}
            label='Login as Teo'
            onClick={handleLoginAsClick}
            variant='outlined'
          />
        </Box>
      </Paper>
    </div>
  );
}

export default LoginPage;
