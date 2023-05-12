import { createTask } from '../services/APICalls';
import { refreshTasks } from '../utils/refreshTasks';

export const TaskForm = () => {
  const form = document.getElementById('task-form');
  const cancelButton = document.getElementById('cancelTask');
  const createButton = document.getElementById('createTask');

  // onClick if modal is open don't open it
  createButton.addEventListener('click', () => {
    if (!form.hasAttribute('open')) {
      form.showModal();
    }
  });

  cancelButton.addEventListener('click', () => {
    form.close();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const taskDate = document.getElementById('task-date').value;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    
    // Creation of the object send to the db
    const newTask = {
      date: taskDate,
      name: taskName,
      description: taskDescription,
    };

    
    if (await createTask(newTask)) {
      // if the request is true, we can clean the inputs 
      document.getElementById('task-date').value = "";
      document.getElementById('task-name').value = "";
      document.getElementById('task-description').value = "";
      // close the modal
      form.close();
      const taskList = document.getElementById('task-list');
      // refresh the tasklist
      await refreshTasks(taskList);
    }
  });
};
