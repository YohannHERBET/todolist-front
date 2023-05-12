import { createTask } from '../services/APICalls';
import { refreshTasks } from '../utils/refreshTasks';
import { updateTask } from '../services/APICalls';

export const TaskForm = () => {
  const form = document.getElementById('task-form');
  const cancelButton = document.getElementById('cancelTask');
  const createButton = document.getElementById('createTask');

  const resetForm = () => {
    document.getElementById('task-date').value = "";
    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
  };

  // onClick if modal is open don't open it
  createButton.addEventListener('click', () => {
    if (!form.hasAttribute('open')) {
      form.showModal();
    }
  });

  cancelButton.addEventListener('click', () => {
    form.close();
    form.removeAttribute('data-task-id');
    resetForm();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // if we click on the update button, we have a data-task-id
    const taskIdToUpdate = form.getAttribute('data-task-id');
    const taskDate = document.getElementById('task-date').value;
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    
    // Creation of the object send to the db
    const newTask = {
      date: taskDate,
      name: taskName,
      description: taskDescription,
    };

    // if we have a data-task-id
    if (taskIdToUpdate) {
      // we update the task
      if (await updateTask(taskIdToUpdate, newTask)) {
        // we clean the data attribut
        form.removeAttribute('data-task-id');
        resetForm();
        form.close();
        // we reload the tasklist
        const taskList = document.getElementById('task-list');
        await refreshTasks(taskList);
      }
    } else {
      // if we click on the button for create a task and the form is ok
      if (await createTask(newTask)) {
        // if the request is true, we can clean the inputs 
        resetForm();
        // close the modal
        form.close();
        const taskList = document.getElementById('task-list');
        // refresh the tasklist
        await refreshTasks(taskList);
      }
    }
  });
};

// method to fill the update task form
export const updateTaskForm = (task) => {
  const form = document.getElementById('task-form');
  const taskDateInput = document.getElementById('task-date');
  const taskNameInput = document.getElementById('task-name');
  const taskDescriptionInput = document.getElementById('task-description');

  taskDateInput.value = task.date;
  taskNameInput.value = task.name;
  taskDescriptionInput.value = task.description;

  if (!form.hasAttribute('open')) {
    form.showModal();
  }
};
