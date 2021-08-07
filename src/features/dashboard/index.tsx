import {
  Box,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { PeopleAlt } from '@material-ui/icons';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import StatisticItem from './components/StatisticItem';
import StudentRankingList from './components/StudentRankingList';
import {
  fetchDashboardData,
  selectDashboardHighestStudentList,
  selectDashboardLowestStudentList,
  selectDashboardStatistics,
} from './dashboardSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    position: 'relative',
  },

  loading: {
    position: 'absolute',
    width: '100%',
    top: theme.spacing(-1),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.dashboard.loading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectDashboardHighestStudentList);
  const lowestStudentList = useAppSelector(selectDashboardLowestStudentList);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}

      {/* Statistics section*/}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize='large' color='primary' />}
            label='male'
            value={statistics.maleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleOutlineIcon fontSize='large' color='primary' />}
            label='female'
            value={statistics.femaleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<DonutLargeIcon fontSize='large' color='primary' />}
            label='mark >= 8'
            value={statistics.highMarkCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<DonutSmallIcon fontSize='large' color='primary' />}
            label='mark >= 5'
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>

      {/* All students rankings */}
      <Box mt={5}>
        <Typography variant='h5'>All Students</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <StudentRankingList
                studentList={highestStudentList}
                title='Student with highest mark'
              />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <StudentRankingList
                studentList={lowestStudentList}
                title='Student with lowest mark'
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
