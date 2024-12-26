const timer = document.querySelector(".time-display")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const milliseconds = document.querySelector(".milliseconds")
const startBtn = document.querySelector(".start-button")
const resetBtn = document.querySelector(".reset-button")
const stopBtn = document.querySelector(".stop-button")

let minutesCount = 0;
let secondsCount = 0
let millisecondsCount = 0
let IntervalId;

resetBtn.setAttribute("disabled", true);
stopBtn.setAttribute("disabled", true);


startBtn.addEventListener("click", () => {

    startBtn.setAttribute("disabled", "true");
    stopBtn.removeAttribute("disabled");
    resetBtn.setAttribute("disabled", true);

    if(secondsCount > 0) {
        clearInterval(IntervalId)
    }

    IntervalId = setInterval(() => {
            millisecondsCount += 10
        
            if(millisecondsCount >= 1000) {
                millisecondsCount = 0
                secondsCount++;
            }
            if(secondsCount >= 60) {
                secondsCount = 0
                minutesCount++;
            }

            minutes.textContent = String(minutesCount).padStart(2,0);
            seconds.textContent = String(secondsCount).padStart(2, "0");
            milliseconds.textContent = String(millisecondsCount).padStart(3, "0");
        }, 10)
    
})


stopBtn.addEventListener("click", () => {
    
    clearInterval(IntervalId); 
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", null);
    resetBtn.removeAttribute("disabled")


});



resetBtn.addEventListener("click", () => {
    clearInterval(IntervalId); 
    millisecondsCount = 0;
    secondsCount = 0;
    minutesCount = 0;


    milliseconds.textContent = "000"
    seconds.textContent = "00"
    minutes.textContent = "00"


    startBtn.removeAttribute("disabled");
    resetBtn.setAttribute("disabled", null);
    stopBtn.removeAttribute("disabled")
})