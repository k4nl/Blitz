import React, { useState, useEffect } from 'react';

import TaskContext from './TaskContext';

import { getTasks, editTaskService, createTask, removeTaskService } from '../helpers/taskApiHelpers';

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [buttonTitle, setButtonTitle ] = useState('Create')
  const [taskToEdit, setTaskToEdit] = useState({});

  const fetchTasks = async () => {
    const data = await getTasks();
    setTaskList(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const refreshTasks = () => {
    fetchTasks();
  };

  const createtask = async (task) => {
    await createTask(task);
  }

  const editTask = async (id, task) => {
    await editTaskService(id, task);
    refreshTasks();
  };

  const removeTask = async (id) => {
    await removeTaskService(id);
    refreshTasks();
  };



  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskToEdit,
        buttonTitle,
        setButtonTitle,
        setTaskToEdit,
        createtask,
        refreshTasks,
        editTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;