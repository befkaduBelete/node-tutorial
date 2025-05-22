const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("📦 Data received");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data); // 📦 Data received
  })
  .catch((err) => {
    console.error(err);
  });