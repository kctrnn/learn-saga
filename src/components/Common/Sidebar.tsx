import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Dashboard } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
}));

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary='Students' />
        </ListItem>
      </List>
    </div>
  );
};
