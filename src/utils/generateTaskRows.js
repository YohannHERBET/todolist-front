import { deletetask } from '../services/APICalls';

// Function to generate the task rows
export const generateTaskRows = (tasks, taskList, refreshTasks) => {
  tasks.forEach((task) => {
    // create row element for all tasks
    const row = document.createElement('tr');

    // create date cell, the date is convert in french long format
    const dateCell = document.createElement('td');
    const date = new Date(task.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateCell.textContent = date.toLocaleDateString('fr-FR', options);
    row.appendChild(dateCell);

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
    updateButton.textContent = 'Update';
    updateButton.setAttribute('aria-label', 'Mettre à jour la tâche');
    updateButton.addEventListener('click', () => {
      console.log('Update button clicked');
    });
    // create cell for button delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', 'Supprimer la tâche');
    deleteButton.addEventListener('click', async () => {
      // refresh task if the delete is ok
      await deletetask(task.id) ? refreshTasks() : false;
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