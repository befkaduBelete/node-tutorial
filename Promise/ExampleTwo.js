const myPromise = new Promise((res, rej) => {
  const success = false;
  if (success) {
    res("This is success message ");
  } else {
    rej("This ie error message ");
  }
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
