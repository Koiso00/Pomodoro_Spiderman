 // sound effect
 const SESound = new Audio("audio/start.mp3");
 const BtnSound = new Audio("audio/mouse-click.wav");
 const TimeupSound = new Audio("audio/timeup.mp3");
 
 // sound background 
 const bgSound = new Audio("audio/background.mp3");
 bgSound.loop = true;
 bgSound.volume = 0.5;

 // frame1.html                                                                                                                                                                  
    const starts = document.getElementById("start-button");                                                                                                                         
    if (starts) {                                                                                                                                                                   
      starts.addEventListener("click", () => { 
        SESound.currentTime = 0;
        SESound.play();
        setTimeout(() => {window.location.href = "frame2.html";      },500);                                                                                                                       
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    // frame2.html                                                                                                                                                                  
    const timer = document.getElementById("timer");                                                                                                                                 
    const pause = document.getElementById("pauseButton");                                                                                                                           
    const start = document.getElementById("startButton");                                                                                                                           
    const reset = document.getElementById("resetButton");                                                                                                                           
    const mode_work = document.getElementById("mode_work");                                                                                                                         
                                                                                                                                                                                    
    let minutes = 25;                                                                                                                                                               
    let seconds = 0;                                                                                                                                                                
    let setTime = null;                                                                                                                                                             
    let mode = "work";                                                                                                                                                              
                                                                                                                                                                                    
    function updateTime() {                                                                                                                                                         
      if (timer) {                                                                                                                                                                  
        timer.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;                                                                          
      }                                                                                                                                                                             
    }                                                                                                                                                                               
                                                                                                                                                                                    
    if (start) {                                                                                                                                                                    
      start.addEventListener("click", () => {         
        BtnSound.currentTime = 0;
        BtnSound.play();         
        bgSound.play();                                                                                                               
        if (setTime === null) {                                                                                                                                                     
          setTime = setInterval(() => {                                                                                                                                       
            if (minutes === 0 && seconds === 0) {        
              TimeupSound.currentTime=0;
              TimeupSound.play();                                                                                                                              
              if (mode === "work") {                                                                                                                                                
                minutes = 5;                                                                                                                                                        
                seconds = 0;                                                                                                                                                        
                mode = "break";                                                                                                                                                     
                if (mode_work) mode_work.innerText = "Break";                                                                                                                       
              } else {                                                                                                                                                              
                minutes = 25;                                                                                                                                                       
                seconds = 0;                                                                                                                                                        
                mode = "work";                                                                                                                                                      
                if (mode_work) mode_work.innerText = "Work";                                                                                                                        
              }                                                                                                                                                                     
              updateTime();                                                                                                                                                         
              return;                                                                                                                                                               
            }                                                                                                                                                                       
            if (seconds === 0) {                                                                                                                                                    
              minutes--;                                                                                                                                                            
              seconds = 59;                                                                                                                                                         
            } else {                                                                                                                                                                
              seconds--;                                                                                                                                                            
            }                                                                                                                                                                       
            updateTime();                                                                                                                                                           
          }, 1000);                                                                                                                                                                 
        }                                                                                                                                                                           
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    if (pause) {                                                                                                                                                                    
      pause.addEventListener("click", () => {    
        BtnSound.currentTime = 0;
        BtnSound.play(); 
        bgSound.pause();                                                                                                                                    
        clearInterval(setTime);                                                                                                                                                     
        setTime = null;                                                                                                                                                             
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    if (reset) {                                                                                                                                                                    
      reset.addEventListener("click", () => {           
        BtnSound.currentTime = 0;
        BtnSound.play();                                                                                                                              
        seconds = 0;                                                                                                                                                                
        minutes = 25;                                                                                                                                                               
        mode = "work";                                                                                                                                                              
        updateTime();                                                                                                                                                               
        clearInterval(setTime);                                                                                                                                                     
        setTime = null;                                                                                                                                                             
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    // Hỗ trợ nút Minimize và Close cho tất cả các frame                                                                                                                            
    const minimizeBtn = document.querySelector(".down-button-2, .minimize-button-2");                                                                                               
    const closeBtn = document.querySelector(".out-button-3");                                                                                                                       
    const endBtn = document.getElementById("endButton");                                                                                                                            
    const stopBtn = document.getElementById("endButton1");
    if (stopBtn){
        stopBtn.addEventListener("click", ()=>{
          SESound.currentTime = 0;
          SESound.play();  
          setTimeout(()=>{ if (window.electronAPI?.closeWindow) {                                                                                                                                      
          window.electronAPI.closeWindow();                                                                                                                                         
        }     },500)     
        })
      }                                                                                                                                                                               
    if (minimizeBtn) {                                                                                                                                                              
      minimizeBtn.addEventListener("click", () => {       
        BtnSound.currentTime = 0;
        BtnSound.play();     
        setTimeout(() => {
           if (window.electronAPI?.minimizeWindow) {                                                                                                                                   
          window.electronAPI.minimizeWindow();                                                                                                                                      
        } 
        }, 500);                                                                                               
                                                                                                                                                                                 
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    if (closeBtn) {                                                                                                                                                                 
      closeBtn.addEventListener("click", () => {   
        BtnSound.currentTime = 0;
        BtnSound.play(); 
        setTimeout(()=>{ if (window.electronAPI?.closeWindow) {                                                                                                                                      
          window.electronAPI.closeWindow();                                                                                                                                         
        }     },500)                                                                                                                                                                                                                                                                                             
      });                                                                                                                                                                           
    }                                                                                                                                                                               
                                                                                                                                                                                    
    if (endBtn) {                                                                                                                                                                   
      endBtn.addEventListener("click", () => {      
        SESound.currentTime = 0;
          SESound.play();                                                                                                                                  
        setTimeout(() => {window.location.href = "frame3.html";      },500);                                                                                                                                       
      });                                                                                                                                                                           
    }    

const soundon = document.getElementById("sound-on");
const soundIcon = document.getElementById("sound-icon");
let check = "on";

if(soundon){
  soundon.addEventListener("click", ()=> {
  BtnSound.currentTime=0;
  BtnSound.play();
    if (check==="on"){
      soundIcon.src="picture/button/sound_off.png";
      bgSound.pause();
      check="off";
    }else{
      soundIcon.src="picture/button/sound_on.png";
      check="on";
      bgSound.play();
    }
  })
}