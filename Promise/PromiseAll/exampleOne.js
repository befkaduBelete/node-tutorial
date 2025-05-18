function fetchUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
}

Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Failed to load one or more users", error);
  });