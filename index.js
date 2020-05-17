// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// refs = {
//   body: document.querySelector("body"),
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
// };
// const min = 0;
// const max = colors.length - 1;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeBodyColor() {
//   refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
// }

// const timer = {
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.timerId = setInterval(changeBodyColor, 1000);
//     this.isActive = true;
//     refs.startBtn.setAttribute("disabled", "");
//   },
//   stop() {
//     clearInterval(this.timerId);
//     this.isActive = false;
//     refs.startBtn.removeAttribute("disabled", "");
//   },
// };
// refs.startBtn.addEventListener("click", timer.start.bind(timer));
// refs.stopBtn.addEventListener("click", timer.stop.bind(timer));





  
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