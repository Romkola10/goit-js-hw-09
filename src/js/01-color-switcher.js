const bodyRef = document.querySelector('body');
const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      ChangeColorRef();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startButtonRef.addEventListener('click', () => {
  timer.start();
});

stopButtonRef.addEventListener('click', () => {
  timer.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ChangeColorRef = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
};
