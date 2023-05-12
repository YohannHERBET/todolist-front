import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from './generateTaskRows';
import { countTodayTasks } from './countTodayTasks';

export const refreshTasks = async (taskList) => {
  const updatedTasks = await fetchTasks();
  const todayTaskCounter = document.getElementById('today-task-counter');
  todayTaskCounter.textContent = countTodayTasks(updatedTasks);
  // clear task list
  taskList.innerHTML = '';
  // Generating new task rows after the update fetch and clear the list
  generateTaskRows(updatedTasks, taskList, refreshTasks);
};
