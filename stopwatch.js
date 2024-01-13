const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const appendSecond = document.querySelector(".seconds");
const appendtens = document.querySelector(".tens");
console.log(stopBtn);
let tens = 0;
let second =0;
let Interval;

startBtn.addEventListener("click", ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

stopBtn.addEventListener("click",()=>{
    clearInterval(Interval);
});

resetBtn.addEventListener("click",()=>{
    clearInterval(Interval);
    appendtens.innerHTML ="00";
    appendSecond.innerHTML="00";
})

function startTime(){
    tens++;
    if(tens <= 9){
        appendtens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendtens.innerHTML = tens;
        if(tens > 59){
            second++;
            if(second<= 9){
                appendSecond.innerHTML = "0" + second;
            }
            else{
                appendSecond.innerHTML = second;
            }
            tens = 0;
            appendtens.innerHTML = "00";
        }
    }
}