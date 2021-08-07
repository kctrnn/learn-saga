import { Box, Typography } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Student } from 'models';

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },

  tableBox: {
    marginTop: theme.spacing(2),
  },
}));

export interface StudentRankingListProps {
  title: string;
  studentList: Student[];
}

function StudentRankingList({ title, studentList }: StudentRankingListProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant='button'>{title}</Typography>

      <TableContainer className={classes.tableBox}>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Mark</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {studentList.map((student, index) => (
              <StyledTableRow key={student.id}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='right'>{student.name}</TableCell>
                <TableCell align='right'>{student.mark}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StudentRankingList;
