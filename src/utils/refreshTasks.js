import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from './generateTaskRows';
import { countTodayTasks } from './countTodayTasks';

export const refreshTasks = async (taskList) => {
  const loader = document.getElementById('loader');
  const loaderOverlay = document.getElementById('loader-overlay');
  loader.style.display = 'block';
  loaderOverlay.style.display = 'block';

  const updatedTasks = await fetchTasks();
  const todayTaskCounter = document.getElementById('today-task-counter');
  todayTaskCounter.textContent = countTodayTasks(updatedTasks);
  // clear task list
  taskList.innerHTML = '';
  // Generating new task rows after the update fetch and clear the list
  generateTaskRows(updatedTasks, taskList, refreshTasks);
  loader.style.display = 'none';
  loaderOverlay.style.display = 'none';
};
