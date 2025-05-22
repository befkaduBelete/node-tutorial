const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ Promise 1 failed"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Promise 3 succeeded"), 3000);
});

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log("First fulfilled:", value);
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });
