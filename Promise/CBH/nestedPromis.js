function function1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is function 1 ");
    }, 1000);
  });
}
function function2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is function 2 ");
    }, 1000);
  });
}
function function3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is function 3 ");
    }, 1000);
  });
}
function function4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is function 4 ");
    }, 1000);
  });
}

function1()
  .then((res) => {
    console.log(res);
    return function2();
  })
  .then((res) => {
    console.log(res);
    return function3();
  })
  .then((res) => {
    console.log(res);
    return function3();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
