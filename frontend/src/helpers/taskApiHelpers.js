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

export const editTask = async (postData) => {
  /*
  try {
    await taskApi.put(`/task/${postData.id}/`, postData, generateHeaders());
    
  } catch (error) {
    console.log(error);
  }
  */
};