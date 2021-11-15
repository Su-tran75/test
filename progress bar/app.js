const circle = document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

let i = 0;
const fakeProgress = [0, 10, 42, 90, 100];

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
  circle.style.strokeDashoffset =
    circumference - (fakeProgress[i] / 100) * circumference;
  loading.innerHTML = fakeProgress[i] + "%";
  i++;
  if (i == fakeProgress.length) {
    clearInterval(interval);
    loading.innerHTML = "Done";
  }
}, 1000);

// const progress = document.querySelector(".progress");
// const loading = document.querySelector(".loading");

// let i = 0;
// const fakeProgress = [0, 10, 35, 40, 42, 60, 70, 75, 90, 100];

// const interval = setInterval(() => {
//   progress.style.width = fakeProgress[i] + "%";
//   loading.innerHTML = fakeProgress[i] + "%";
//   i++;
//   if (i == fakeProgress.length) {
//     clearInterval(interval);
//   loading.innerHTML = "Completed";

//   }
// }, 1000);
