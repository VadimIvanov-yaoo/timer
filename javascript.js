let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

const hourDisplay = document.getElementById('hour');
const minuteDisplay = document.getElementById('minute');
const secondDisplay = document.getElementById('second');
const timerBlock = document.querySelector('.timer_block'); // Получаем блок таймера

const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    hourDisplay.textContent = String(hours).padStart(2, '0');
    minuteDisplay.textContent = String(minutes).padStart(2, '0');
    secondDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) {
        clearInterval(timerInterval); 
        startButton.textContent = "Start";
        timerBlock.classList.remove('rainbow-border'); 
    } else {
        timerBlock.classList.add('rainbow-border'); 
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay(); 
        }, 1000);
        startButton.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay(); 
    startButton.textContent = "Start";
    isRunning = false;
    timerBlock.classList.remove('rainbow-border'); 
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
