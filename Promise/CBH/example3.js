function function1(callback) {
  console.log("This is the 1 st function  Start");
  setTimeout(function () {
    callback();
  }, 1000);
}

function function2(callback) {
  console.log("This is the 2nd function start");
  setTimeout(function () {
    callback();
  }, 2000);
}

function function3(callback) {
  console.log("This is the 3rd function start");
  setTimeout(function () {
    callback();
  }, 3000);
}

// function1(function2(function(){
//     console.log("THis")
// }))

function1(function () {
  console.log("F1 end !");
  function2(function () {
    console.log("F2 end");
    function3(function () {
      console.log("F3 end");
    });
  });
});

function1(() => {
  console.log("F1 end !");
  function2(() => {
    console.log("F2 end");
    function3(() => {
      console.log("F3 end");
    });
  });
});
