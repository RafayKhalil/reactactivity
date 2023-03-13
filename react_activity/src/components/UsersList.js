import React from "react";
import { users } from "../users";
import UserProfile from "./UserProfile";

const UsersList = () => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserProfile key={user.username} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
