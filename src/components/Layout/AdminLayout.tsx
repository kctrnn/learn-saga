import { Box, makeStyles } from "@material-ui/core";
import { Header, Sidebar } from "components/Common";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",

    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "240px 1fr",
    gridTemplateAreas: `"header header" "sidebar main"`,
  },

  header: {
    gridArea: "header",
  },

  sidebar: {
    gridArea: "sidebar",
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },

  main: {
    gridArea: "main",
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.background.paper,
  },
}));

export const AdminLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>

      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>

      <Box className={classes.main}>MAIN</Box>
    </Box>
  );
};
