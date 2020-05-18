class Timer {
    constructor(durationInput, startBtn, pauseBtn, callBacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callBacks) {
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.stopId = setInterval(this.tick, 20);
    };

    tick = () => {
        if (this.timeRemaining == 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .02;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }           
        }

    };

    pause =() => {
        clearInterval(this.stopId);
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = String(time.toFixed(2));
    }
}
