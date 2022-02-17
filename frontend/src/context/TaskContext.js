import { createContext } from 'react';

export const INITIAL_STATE = {
  taskList: [],
};

const TaskContext = createContext(INITIAL_STATE);

export default TaskContext;