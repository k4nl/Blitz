import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


export default function TasksTable() {

  const { taskList, setButtonTitle, setTaskToEdit, removeTask } = useContext(TaskContext);

  const editStatus = (task) => {
    setButtonTitle('Edit');
    setTaskToEdit(task);
  }

  return (
    <Paper sx={{ width: '50%', mt: 5 }}>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { taskList ? taskList.map(({ _id: id, task }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {`${task.name.substring(0, 20)}...`}
              </TableCell>
              <TableCell align="right">{`${task.description.substring(0, 20)}...`}</TableCell>
              <TableCell align="right">
                {task.status}
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1}}
                  onClick={ (e) => editStatus({ id, task }) }
                  >edit
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => removeTask(id)}
                  >remove
                </Button>
              </TableCell>
            </TableRow>
          )) : <TableRow></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  )
}
