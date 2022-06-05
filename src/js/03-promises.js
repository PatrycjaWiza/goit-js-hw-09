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
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
// function create Promise
function createPromise(position, delay) {
  position = i;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        setTimeout(() => {
          resolve({ position, delay });
        }, step.value);
      } else {
        // Reject
        setTimeout(() => {
          reject({ position, delay });
        }, step.value);
      }
    }, delay.value);
  });
}

//
//
