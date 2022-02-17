import taskApi from '../services/taskServices';

const generateHeaders = () => ({
  authorization: `${sessionStorage.token}`,
});

export const getTasks = async () => {
  try {
    const { data } = await taskApi.get('/task', generateHeaders());
    return data;
  } catch (error) {
    window.alert(error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await taskApi.post('/task', task, generateHeaders());
    return response.data;
  } catch (error) {
    const { data } = await error.response;
    window.alert(data.message);
  }
};


export const editTaskService = async (id, task) => {
  try {
    await taskApi.put(`/task/${id}/`, task, generateHeaders());
    
  } catch (error) {
    const { data } = await error.response;
    window.alert(data.message);
  }
};

export const removeTaskService = async (id) => {
  try {
    await taskApi.delete(`/task/${id}/`, generateHeaders());
    
  } catch (error) {
    const { data } = await error.response;
    window.alert(data.message);
  }
};