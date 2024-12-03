import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import type { User } from "./User.tsx";

type Props = {
  user: User;
  children?: React.ReactNode;
};

const PersonProfile = ({ user, children }: Props) => {
  const [color, setColor] = useState(user.color);

  return (
    <div
      className="user-card"
      id={`user_${user.id}`}
      style={{ color: color, border: "1px solid" }}
    >
      {user.pet ? (
        <p>
          {user.name} has a {user.pet.name}
        </p>
      ) : (
        <p>{user.name} has no pet</p>
      )}
      <button
        onClick={() => {
          setColor(color == "red" ? user.color : "red"); // impure state + dirty
        }}
      >
        Select
      </button>
    </div>
  );
};

const UsersList = ({ users }: { users: User[] }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <PersonProfile user={user} />
      </li>
    ))}
  </ul>
);
// React.createElement("li", { key: user.id },
//   React.createElement(PersonProfile, { user })
// )

import { users } from "./users.tsx";
const root = createRoot(document.getElementById("root")!);
// Impure
root.render(UsersList({ users })); // 3x render PersonProfile
