const timer = document.getElementById("timer");
const pause = document.getElementById("pauseButton");
const start = document.getElementById("startButton");

let minutes=0;
let seconds=10;
let setTime=null;

start.addEventListener("click",()=>{
    if (setTime===null){
    setTime=setInterval(() => {

    if (minutes === 0 && seconds === 0){ 
    clearInterval(setTime);
    setTime = null;
    minutes=25;
    seconds=0;
    timer.innerText=`${minutes}:${seconds.toString().padStart(2,"0")}`
    return;
}
    if (seconds==0){
        minutes--;
        seconds=59;
    }else{
        seconds--;
    }
    timer.innerText=`${minutes}:${seconds.toString().padStart(2,"0")}`
}, 1000);
}})

pause.addEventListener("click",()=>{
    clearInterval(setTime);
    setTime=null;
})
