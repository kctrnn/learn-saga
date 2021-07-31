import {
  Box,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { ChangeEvent, useEffect } from "react";
import StudentTable from "../components/StudentTable";
import { fetchStudentList, setFilter } from "../studentSlice";

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

  pagination: {
    display: "flex",
    justifyContent: "center",
  },
}));

function MainPage() {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const studentList = useAppSelector((state) => state.student.list);
  const loading = useAppSelector((state) => state.student.loading);
  const { _limit, _page, _totalRows } = useAppSelector(
    (state) => state.student.pagination
  );
  const filter = useAppSelector((state) => state.student.filter);

  useEffect(() => {
    const action = fetchStudentList(filter);
    dispatch(action);
  }, [dispatch, filter]);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(
      setFilter({
        ...filter,
        _page: page,
      })
    );
  };

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

      <Box my={2} className={classes.pagination}>
        <Pagination
          count={Math.ceil(_totalRows / _limit)}
          variant='outlined'
          shape='rounded'
          page={_page}
          color='primary'
          disabled={loading}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

export default MainPage;
