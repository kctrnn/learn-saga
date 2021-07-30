import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useAppDispatch } from "app/hooks";
import { logout } from "features/auth/authSlice";

const useStyles = makeStyles((theme) => ({
  root: {},

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
          >
            <AccountBalanceIcon />
          </IconButton>

          <Typography variant='h6' className={classes.title}>
            Student Management
          </Typography>

          <Button color='inherit' onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
