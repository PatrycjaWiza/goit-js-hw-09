const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop');
// getRandom color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// click on startBtn evt
startBtn.addEventListener('click', handleEvent);
let timerId = null;
function handleEvent() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}
// click on stopBtn evt
stopBtn.addEventListener('click', stopEvent);
function stopEvent() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
