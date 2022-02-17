import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import UserContext from '../context/UserContext';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function TaskForm() {

  const { createTask } = useContext(UserContext);

  const [ name, setTaskName ] = useState('');
  const [ description, setTaskDescription ] = useState('');
  const [ status, setTaskStatus ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (name && description && status) {
      const errorMessage = await createTask({ name, description, status, });
      if (!errorMessage) {
        console.log('parabens');
      } else {
        global.alert(errorMessage);
      }
    }
  }
  return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={ handleSubmit }
      >
        <Paper sx={{ display: 'flex', flexDirection: 'column'}}>
          <TextField
            required
            label="Task Name"
            type="text"
            onChange={ (e) => setTaskName(e.target.value)}
          />
          <TextField
            required
            type="text"
            label="Description"
            onChange={ (e) => setTaskDescription(e.target.value)}
          />

          <InputLabel id="status">Task Status</InputLabel>
            <Select
              labelId="status"
              id="status-select"
              value={status}
              label="Status"
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <MenuItem value='pronto'>Pronto</MenuItem>
              <MenuItem value='em andamento'>Em andamento</MenuItem>
              <MenuItem value='pendente'>Pendente</MenuItem>
            </Select>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 4}}>
        <Button
          onClick={ (e) => handleSubmit(e)}
          type="submit"
          color="secondary"
          variant="contained"
        >
          Create Task
        </Button>
        </Box>
      </Box>
  )
}
