const fetchUserInfo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("User data not found ...");
  }
  const userData =await response.json(); // async 
  console.log(userData)
};

fetchUserInfo();