require('dotenv').config();

// fetch the env variable in the .env with the dotenv library
const apiUrl = process.env.API_URL

// call api for fetch all
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${apiUrl}/taches`);
    if (!response.ok) {
      throw new Error('Error fetching tasks');
    }
    // return the response
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// call api for delete a task
export const deletetask = async (id) => {
  try {
    const response = await fetch(
      `${apiUrl}/taches/${id}`, 
      { method: 'DELETE'}
    );
    if (!response.ok) {
      throw new Error('Error deleting tasks');
    } else {
      return response.ok
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// call api for create a task
export const createTask = async (task) => {
  try {
    const response = await fetch(
      `${apiUrl}/taches`,
      {
        method: 'POST',
        body: JSON.stringify(task),
      }
    );
    if (!response.ok) {
      throw new Error('Error creating task');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// call api for update a task
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await fetch(`${apiUrl}/taches/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
      throw new Error('Error updating task');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

