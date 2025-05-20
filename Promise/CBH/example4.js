function function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("In Function One");
    });
  }, 1000);
}

function function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This function 2");
    }, 2000);
  });
}

function1()
  .then((res) => {
   // console.log("This is function one called ")
    console.log(res);
    return function2();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
