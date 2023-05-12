import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from '../utils/generateTaskRows';
import { refreshTasks } from '../utils/refreshTasks';
import { countTodayTasks } from '../utils/countTodayTasks';
import { showNotification } from '../utils/showNotification';

// Component administrator for the tasks
export const TaskTable = async () => {
  const loader = document.getElementById('loader');
  const loaderOverlay = document.getElementById('loader-overlay');
  loader.style.display = 'block';
  loaderOverlay.style.display = 'block';

  const tasks = await fetchTasks()
  const todayTaskCounter = document.getElementById('today-task-counter');
  const counter = countTodayTasks(tasks)
  todayTaskCounter.textContent = counter;
  const taskList = document.getElementById('task-list');
  if (counter > 0) {
    showNotification(counter);
  }
    // generate tasks table
    generateTaskRows(tasks, taskList, () => refreshTasks(taskList));
    loader.style.display = 'none';
    loaderOverlay.style.display = 'none';
}
