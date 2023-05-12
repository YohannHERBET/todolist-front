import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from './generateTaskRows';

export const refreshTasks = async (taskList) => {
  const updatedTasks = await fetchTasks();
  // clear task list
  taskList.innerHTML = '';
  // Generating new task rows after the update fetch and clear the list
  generateTaskRows(updatedTasks, taskList, refreshTasks);
};
