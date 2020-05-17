const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

const changeColor = () => {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.background = colors[color];
};

const startHandler = () => {
  refs.start.disabled = true;
  intervalId = setInterval(changeColor, 500);
};

const stopHandler = () => {
  clearInterval(intervalId);
  refs.start.disabled = false;
};

refs.start.addEventListener('click', startHandler);
refs.stop.addEventListener('click', stopHandler);