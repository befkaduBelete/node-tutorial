const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("This value is small number "));
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Promise is fulfilled with value" + result);
  })
  .catch((error) => {
    console.error("Promise is rejected with  error ", error);
  });
