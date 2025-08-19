// src/data/dummyData.js
export const users = [
  { id: 1, username: "Ricky Bisht", online: true },
  { id: 2, username: "Pankaj Kandpal", online: true },
  { id: 3, username: "Sandeep", online: false },
  { id: 4, username: "Kajal", online: true },
];

export const messages = [
  { id: 1, senderId: 1, content: "Hey, how are you?", timestamp: new Date(Date.now() - 600000) },
  { id: 2, senderId: 2, content: "I'm good, thanks!", timestamp: new Date(Date.now() - 550000) },
  { id: 3, senderId: 1, content: "Wanna catch up later?", timestamp: new Date(Date.now() - 500000) },
];
