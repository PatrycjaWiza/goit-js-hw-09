var form=document.querySelector(".form"),submitBtn=document.querySelector("button"),ref=document.querySelector("form"),delay=ref.delay,step=ref.step,amount=ref.amount,position=null;function handleEvent(e){for(e.preventDefault(),i=0;i<amount.value;i++)createPromise(position,delay).then((function(e){var t=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(e){var t=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}function createPromise(e,t){return e=i,new Promise((function(o,n){setTimeout((function(){Math.random()>.3?setTimeout((function(){o({position:e,delay:t})}),step.value):setTimeout((function(){n({position:e,delay:t})}),step.value)}),t.value)}))}form.addEventListener("submit",handleEvent);
//# sourceMappingURL=03-promises.9c1e3034.js.map
