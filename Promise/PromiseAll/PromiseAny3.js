const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");

Promise.any([p1, p2])
  .then(console.log)
  .catch(err => {
    console.error("All failed:");
    console.error(err instanceof AggregateError); // true
    console.error(err.errors); // ["Fail 1", "Fail 2"]
  });