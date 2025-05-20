async function f2() {
  console.log("This is a function with out awite return error");
  throw new Error("No Data");
}

f2()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(`${error}`);
  });
