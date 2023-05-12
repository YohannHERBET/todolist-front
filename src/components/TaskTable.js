import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from '../utils/generateTaskRows';
import { refreshTasks } from '../utils/refreshTasks';

// Component administrator for the tasks
export const TaskTable = async () => {
  const tasks = await fetchTasks()
    const taskList = document.getElementById('task-list');
    // generate tasks table
    generateTaskRows(tasks, taskList, () => refreshTasks(taskList));
}
