import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Student } from "models";
import React from "react";

const useStyles = makeStyles((theme) => ({
  table: {},

  editBtn: {
    marginRight: theme.spacing(1),
  },
}));

export interface StudentTableProps {
  studentList: Student[];
}

function StudentTable({ studentList }: StudentTableProps) {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>City</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {studentList.map((student) => (
              <TableRow key={student.id}>
                <TableCell width={320}>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.mark}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.city}</TableCell>
                <TableCell align='right'>
                  <Button
                    size='small'
                    color='primary'
                    className={classes.editBtn}
                  >
                    Edit
                  </Button>
                  <Button size='small' color='secondary'>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudentTable;
