
import React from "react";
import "./ActiveUsers.css";

const UserItem = React.memo(({ user }) => (
  <div className={`user-item ${user.online ? "online" : "offline"}`}>
    {user.username} {user.online ? "🟢" : "🔴"}
  </div>
));

export const ActiveUsers = React.memo(({ users }) => (
  <div className="sidebar">
    <h3 style={{
      color:"black"
    }}>Active Users</h3>
    {users.map(user => <UserItem key={user.id} user={user} />)}
  </div>
));
