import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TaskContext from '../context/TaskContext';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function TaskForm() {

  const {
    createtask,
    refreshTasks,
    buttonTitle,
    setButtonTitle,
    taskToEdit,
    setTaskToEdit,
    editTask,
  } = useContext(TaskContext);

  const [ name, setTaskName ] = useState('');
  const [ description, setTaskDescription ] = useState('');
  const [ status, setTaskStatus ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && description && status) {
      const errorMessage = await createtask({ name, description, status, });
      if (!errorMessage) {
        setTaskName('');
        setTaskDescription('')
        setTaskStatus('')
        refreshTasks()
      } else {
        global.alert(errorMessage);
      }
    }
  }

  const editSubmit = async (e) => {
    e.preventDefault();
    if (status) {
      setButtonTitle('Create')
      setTaskToEdit({});
      await editTask(taskToEdit.id, { status });
    }
  }

  return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={ handleSubmit }
      >
        <Paper sx={{ display: 'flex', flexDirection: 'column', mt: 5}}>
          <TextField
            required
            disabled={ buttonTitle === 'Edit' ? true : false }
            label="Task Name"
            value={ buttonTitle === 'Create' ? name : taskToEdit.task.name }
            type="text"
            sx={{ p: 1, m: 1 }}
            onChange={ (e) => setTaskName(e.target.value)}
          />
          <TextField
            required
            type="text"
            disabled={ buttonTitle === 'Edit' ? true : false }
            value={ buttonTitle === 'Create' ? description : taskToEdit.task.description }
            label="Description"
            sx={{ p: 1, m: 1 }}
            onChange={ (e) => setTaskDescription(e.target.value)}
          />

          <InputLabel id="status" sx={{ mx: 2,  }}>Task Status</InputLabel>
            <Select
            sx={{ p: 1, mx: 2, mb: 4 }} 
              labelId="status"
              id="status-select"
              value={status}
              label="Status"
              defaultValue="pendente"
              onChange={(e) => setTaskStatus(e.target.value)}
            >
              <MenuItem value='pronto'>Pronto</MenuItem>
              <MenuItem value='em andamento'>Em andamento</MenuItem>
              <MenuItem value='pendente'>Pendente</MenuItem>
            </Select>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 4}}>
        <Button
          onClick={ buttonTitle === 'Create' ? (e) => handleSubmit(e) : (e) => editSubmit(e)}
          type="submit"
          color="secondary"
          variant="contained"
        >
          {`${buttonTitle} Task`}
        </Button>
        </Box>
      </Box>
  )
}
