import { TaskForm } from './components/TaskForm';
import { TaskTable } from './components/TaskTable';
import { Notification } from './components/Notification';

export const App = () => {
  TaskForm();
  TaskTable();
  Notification();
}

App();