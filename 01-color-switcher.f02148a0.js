var startBtn=document.querySelector("[data-start]"),stopBtn=document.querySelector("[data-stop");function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}startBtn.addEventListener("click",handleEvent);var timerId=null;function handleEvent(){timerId=setInterval((function(){document.body.style.background=getRandomHexColor()}),1e3),startBtn.disabled=!0}function stopEvent(){clearInterval(timerId),startBtn.disabled=!1}stopBtn.addEventListener("click",stopEvent);
//# sourceMappingURL=01-color-switcher.f02148a0.js.map