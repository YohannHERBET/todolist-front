import { deletetask } from '../services/APICalls';

// Function to generate the task rows
export const generateTaskRows = (tasks, taskList, refreshTasks) => {
  tasks.forEach((task) => {
    const loader = document.getElementById('loader');
    const loaderOverlay = document.getElementById('loader-overlay');
    loader.style.display = 'block';
    loaderOverlay.style.display = 'block';

    // create row element for all tasks
    const row = document.createElement('tr');

    // create date cell, the date is convert in french long format
    const dateCell = document.createElement('td');
    const date = new Date(task.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateCell.textContent = date.toLocaleDateString('fr-FR', options);
    row.appendChild(dateCell);

    // if the date of the task is today add a color with the class
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      dateCell.classList.add('today');
    }

    // create name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = task.name;
    row.appendChild(nameCell);

    // create description cell
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = task.description;
    row.appendChild(descriptionCell);

    // create cell for button update
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Modifier';
    updateButton.setAttribute('class', 'button-validate');
    updateButton.setAttribute('id', 'updateTaskButton');
    updateButton.setAttribute('aria-label', 'Mettre à jour la tâche');
    updateButton.addEventListener('click', () => {
      console.log('Update button clicked');
    });
    // create cell for button delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.setAttribute('class', 'button-warning');
    updateButton.setAttribute('id', 'deleteTaskButton');
    deleteButton.setAttribute('aria-label', 'Supprimer la tâche');
    deleteButton.addEventListener('click', async () => {
      // refresh tasks if the delete is ok
      const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?");
      if (confirmation) {
        await deletetask(task.id) ? refreshTasks(taskList) : false;
      }
    });
    // create a cell for button update and delete
    const buttonCell = document.createElement('td');
    buttonCell.appendChild(updateButton);
    buttonCell.appendChild(deleteButton);

    row.appendChild(buttonCell);

    // add row to task list
    taskList.appendChild(row);
  });
};