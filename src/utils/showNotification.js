// show notification on the top of the page when we start the app
export const showNotification = (counter) => {
  const notification = document.getElementById('notification');
  notification.textContent = `Il y a ${counter} tâches prévues pour aujourd'hui, au travail ! ;)`;
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 3000);
};
