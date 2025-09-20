// asyncAwaitTask.js

// Function 1: Simulate fetching user details
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Failed to fetch user");
      } else {
        resolve({ id: 1, name: "Jane Doe" });
      }
    }, 1500); // simulate 1.5s delay
  });
}

// Function 2: Simulate fetching posts for a user
function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject("Invalid user ID for posts");
      } else if (Math.random() < 0.2) {
        reject("Failed to fetch posts");
      } else {
        resolve([
          { postId: 101, title: "Post One" },
          { postId: 102, title: "Post Two" }
        ]);
      }
    }, 2000); // simulate 2s delay
  });
}

// Async function to combine user and posts
async function getUserAndPosts() {
  try {
    const user = await fetchUser(); // wait for user
    const posts = await fetchPosts(user.id); // wait for posts using userId

    const combinedData = { user, posts };
    console.log("Combined Data:", combinedData);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("All data fetched successfully");
  }
}

// Call the function
getUserAndPosts();
