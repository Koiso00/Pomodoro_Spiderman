const timer = document.getElementById("timer");
const pause = document.getElementById("pauseButton");
const start = document.getElementById("startButton");
const reset = document.getElementById("resetButton");
const mode_work = document.getElementById("mode_work");
console.log(start);
let minutes = 25;
let seconds = 0;
let setTime = null;
let mode = "work";
function updateTime(){
    timer.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
start.addEventListener("click", () => {
  if (setTime === null) {
    setTime = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        if(mode==="work"){
            
            minutes=5;
            seconds=0;
            mode="break";
            mode_work.innerText="Break";
        }else{
            
            minutes=25;
            seconds=0;
            mode="work";
            mode_work.innerText="Work";
        }
        updateTime();
        return;
      }
      if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTime();
    }, 1000);
  }
});

pause.addEventListener("click", () => {
  clearInterval(setTime);
  setTime = null;
});

reset.addEventListener("click", () => {
  seconds = 0;
  minutes = 25;
  mode="work";
  updateTime();
  clearInterval(setTime);
  setTime = null;
});

const minimizeBtn = document.querySelector(".down-button-2");
const closeBtn = document.querySelector(".out-button-3");

if (minimizeBtn) {
  minimizeBtn.addEventListener("click", () => {
    window.electronAPI.minimizeWindow();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    window.electronAPI.closeWindow();
  });
}