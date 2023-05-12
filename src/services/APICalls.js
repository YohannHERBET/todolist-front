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