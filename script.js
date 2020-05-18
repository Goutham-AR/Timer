const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const circle = document.querySelector("circle");



const perimeter = circle.getAttribute("r") * 2 * Math.PI;




const arguments = [durationInput, startBtn, pauseBtn];
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
let offset = perimeter / durationInput.value;

const t1 = new Timer(...arguments, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset", perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        console.log("Timer is completed");
    }
});

