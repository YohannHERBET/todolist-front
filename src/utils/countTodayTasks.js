export const countTodayTasks = (tasks) => {
  // new instance of Date for have today
  const today = new Date();
  // format the today date
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // initialize the counter
  let count = 0;

  // Loop for watch if the task due date is today
  tasks.forEach((task) => {
    if (task.date === todayStr) {
      // if we have task we count +1
      count++;
    }
  });
  // return the count
  return count;
};
