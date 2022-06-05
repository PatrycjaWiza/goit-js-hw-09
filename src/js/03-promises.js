// constants
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');
const { delay, step, amount } = document.querySelector('form');
let position = null;

// submit form handleEvent
form.addEventListener('submit', handleEvent);

function handleEvent(e) {
  e.preventDefault();

  // loop for promise generator
  for (i = 0; i < amount.value; i++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, step.value);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }, step.value);
      });
  }
}
// function create Promise
function createPromise(position, delay) {
  position = i;
  delay = delay.value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        setInterval(() => {
          resolve({ position, delay });
        }, step.value);
      } else {
        // Reject
        setInterval(() => {
          reject({ position, delay });
        }, step.value);
      }
    }, delay.value);
  });
}

//
//
