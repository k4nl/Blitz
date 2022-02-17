import React, { useState, useEffect } from 'react';

import TaskContext from './TaskContext';

import { getTasks, editTask } from '../helpers/taskApiHelpers';

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({});

  const fetchPosts = async () => {
    const data = await getTasks();
    setTaskList(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refreshPosts = () => {
    fetchPosts();
  };

  const setEdit = (postData) => {
    setTaskToEdit(postData);
  };

  const submitEdit = async (postData) => {
    await editTask(postData);
    setTaskToEdit({});
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskToEdit,
        refreshPosts,
        setEdit,
        submitEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;