function getInfo() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(42);
      } else {
        reject(new Error("wrong value error"));
      }
    }, 2000);
  });
}

async function getNumberInfo() {
  try {
    const result = await getInfo();
    console.log("Result", result);
  } catch (error) {
    console.log(`${error}`);
  }
}


getNumberInfo()