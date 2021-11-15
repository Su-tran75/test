const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const fakeProgress = [0, 10, 35, 40, 42, 60, 70, 75, 90, 100];

const interval = setInterval(() => {
  progress.style.width = fakeProgress[i] + "%";
  loading.innerHTML = fakeProgress[i] + "%";
  i++;
  if (i == fakeProgress.length) {
    clearInterval(interval);
  loading.innerHTML = "Completed";

  }
}, 1000);

// let i = 0;

// const interval = setInterval(() => {
//   i++;
//   console.log("hello");
//   if (i == 5) {
//     clearInterval(interval);
//   }
// }, 1000);
