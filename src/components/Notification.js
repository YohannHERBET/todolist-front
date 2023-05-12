export const Notification = () => {
  const hello = () => { console.log('Hello PERI-G ;)'); }
  const periG = document.querySelector("h1");
  periG.addEventListener("click", hello);
};
