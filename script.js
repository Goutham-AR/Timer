const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const circle = document.querySelector("circle");



const perimeter = circle.getAttribute("r") * 2 * Math.PI;




const arguments = [durationInput, startBtn, pauseBtn];
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let offset = perimeter / durationInput.value;

const t1 = new Timer(...arguments, {
    onStart() {
        console.log("timer started..");
    },
    onTick() {
        circle.setAttribute("stroke-dashoffset", currentOffset);
        currentOffset = currentOffset - 1;
    },
    onComplete() {
        console.log("Timer is completed");
    }
});

