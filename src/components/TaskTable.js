import { fetchTasks } from '../services/APICalls';
import { generateTaskRows } from '../utils/generateTaskRows';

// Component administrator for the tasks
export const TaskTable = async () => {
  const tasks = await fetchTasks()
    const taskList = document.getElementById('task-list');
    // clean task list first for update
    taskList.innerHTML = '';

    // fetching tasks
    const refreshTasks = async () => {
      const updatedTasks = await fetchTasks();
      // clear task list
      taskList.innerHTML = '';
      //Generating new task rows after the update fetch and clear the list
      generateTaskRows(updatedTasks, taskList, refreshTasks);
    };
    // generate tasks table
    generateTaskRows(tasks, taskList, refreshTasks);
}
