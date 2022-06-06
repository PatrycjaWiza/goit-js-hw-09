import Notiflix from 'notiflix';

// constants
const form = document.querySelector('.form');
const { delay, step, amount } = document.querySelector('form');
let position = null;

// submit form handleEvent
form.addEventListener('submit', handleEvent);

function handleEvent(e) {
  e.preventDefault();

  // loop for promise generator
  for (let i = 0; i < amount.value; i++) {
    setTimeout(() => {
      position = i + 1;

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, i * step.value);
  }
}

// function create Promise
function createPromise(position, delay) {
  delay = delay.value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
