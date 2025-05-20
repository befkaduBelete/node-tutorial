//start the coffee machine -2 secs
//Grind coffee bean - 1
//Boil water - 1.5
//pour boiling water into cap - 0.5
//Add ground coffee to the cup  -0.5
//stir the coffee 0.3
//Enjoy your coffee !
function startCoffeeMachine() {
  return new Promise((resolve) => {
    console.log("Starting the coffee Machine ...");
    setTimeout(function () {
      console.log("Coffee machine is ready ");
      resolve("coffee machine is ready");
    }, 2000);
  });
}

function grindCoffeeBens() {
  return new Promise((resolve) => {
    console.log("Grinding coffee beans ...");
    setTimeout(function () {
      console.log("Coffee beans are ground .");
      resolve("ground coffee ");
    }, 1000);
  });
}

function boilWater() {
  return new Promise((resolve) => {
    console.log("Boiling water ...");
    setTimeout(function () {
      console.log("Water is boiled .");
      resolve("Boiled water");
    }, 1500);
  });
}

function pourBoilingWaterIntoCup(boiledWater) {
  return new Promise((resolve) => {
    console.log("Pouring boiling water into a cup ...");
    setTimeout(function () {
      console.log("Boiling water is in the cup ...");
      resolve(boiledWater + "in cup");
    }, 500);
  });
}

function addCoffeeToCup(groundCoffee) {
  return new Promise((resolve) => {
    console.log("Adding ground coffee to the cup ...");
    setTimeout(function () {
      console.log("Coffee is added to the cup .");
      resolve("coffee is added to " + groundCoffee);
    }, 500);
  });
}

function stirCoffee(coffeeInCup) {
  return new Promise((resolve) => {
    console.log("Stirring the coffee ...");
    setTimeout(function () {
      console.log("Coffee is stirred .");
      resolve("enjoyable " + coffeeInCup);
    }, 300);
  });
}

function enjoyCoffee(finalCoffee) {
  console.log("Enjoying my " + finalCoffee);
}

//Callback Hell
// startCoffeeMachine(function (coffeeMachineStatus) {
//   grindCoffeeBens(function (groundCoffee) {
//     boilWater(function (boiledWater) {
//       pourBoilingWaterIntoCup(boiledWater, function (waterInCup) {
//         addCoffeeToCup(groundCoffee, function (coffeeInCup) {
//           stirCoffee(coffeeInCup, function (finalCoffee) {
//             enjoyCoffee(finalCoffee);
//           });
//         });
//       });
//     });
//   });
// });

startCoffeeMachine((coffeeMachineStatus) => {
  console.log(coffeeMachineStatus);
  return grindCoffeeBens();
})
  .then((groundCoffee) => {
    console.log(groundCoffee);
    return boilWater();
  })
  .then((boiledWater) => {
    console.log(boiledWater);
    return pourBoilingWaterIntoCup(boiledWater);
  })
  .then((waterInCup) => {
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
  })
  .then((coffeeInCup) => {
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
  })
  .then((finalCoffee) => {
    enjoyCoffee(finalCoffee);
  })
  .catch((error) => {
    console.log(error);
  });
