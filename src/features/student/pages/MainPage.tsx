import {
  Box,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import StudentTable from "../components/StudentTable";
import { fetchStudentList } from "../studentSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },

  titleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: theme.spacing(4),
  },

  progress: {
    marginBottom: theme.spacing(1),
  },
}));

function MainPage() {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const studentList = useAppSelector((state) => state.student.list);
  const loading = useAppSelector((state) => state.student.loading);

  useEffect(() => {
    const action = fetchStudentList({ _page: 1, _limit: 15 });
    dispatch(action);
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography component='h1' variant='h5'>
          Students
        </Typography>

        <Button variant='contained' color='primary'>
          Add new student
        </Button>
      </Box>

      {loading && <LinearProgress />}

      {!loading && <StudentTable studentList={studentList} />}
    </Box>
  );
}

export default MainPage;
