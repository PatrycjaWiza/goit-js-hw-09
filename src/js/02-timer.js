// Flatpickr import
import flatpickr from 'flatpickr';
// Flatpickr style import
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start');
const dateTimePicker = document.querySelector('#datetime-picker');
const timerDays = document.querySelector('[data-days');
const timerHours = document.querySelector('[data-hours');
const timerMinutes = document.querySelector('[data-minutes');
const timerSeconds = document.querySelector('[data-seconds');

const date = new Date();

startBtn.disabled = true;

// flatpickr usage
flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= date.getTime()) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      console.log(convertMs(selectedDates[0]));
      startBtn.disabled = false;
    }
  },
});

// function to get remaining time
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', passTimeToTimer);
function passTimeToTimer() {}
