// promiseTask.js

// Function 1: Simulate fetching user data
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject("Failed to fetch user data");
      } else {
        resolve({ id: 1, name: "John Doe", role: "Admin" });
      }
    }, 2000); // simulate 2s delay
  });
}

// Function 2: Simulate fetching user permissions
function fetchUserPermissions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Failed to fetch user permissions");
      } else {
        resolve(["read", "write", "delete"]);
      }
    }, 1500); // simulate 1.5s delay
  });
}

// Using Promises
fetchUserData()
  .then((user) => {
    console.log("User Data:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Fetch attempt complete\n");
  });

// Using Promise.all
Promise.all([fetchUserData(), fetchUserPermissions()])
  .then(([user, permissions]) => {
    console.log("Promise.all Success:");
    console.log("User:", user);
    console.log("Permissions:", permissions);
  })
  .catch((error) => {
    console.error("Promise.all Error:", error);
  })
  .finally(() => {
    console.log("Promise.all attempt complete\n");
  });

// Using Promise.race
Promise.race([fetchUserData(), fetchUserPermissions()])
  .then((result) => {
    console.log("Promise.race Winner:", result);
  })
  .catch((error) => {
    console.error("Promise.race Error:", error);
  })
  .finally(() => {
    console.log("Promise.race attempt complete");
  });
