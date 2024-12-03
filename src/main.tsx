import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")!);

type User = {
  id: string;
  name: string;
  color: string;
  pet?: {
    name: string;
  };
};

const users: User[] = [
  {
    id: "123",
    name: "Alice",
    color: "red",
    pet: { name: "cat" },
  },
  {
    id: "234",
    name: "Bob",
    color: "blue",
    pet: { name: "dog" },
  },
  {
    id: "345",
    name: "Catherine",
    color: "green",
  },
];

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

const UsersList = ({ users }: { users: User[] }) =>
  React.createElement(
    "ul",
    null,
    users.map((user) =>
      React.createElement(
        "li",
        { key: user.id },
        // root.tutajjestem = tu
        React.createElement(PersonProfile, { user })
      )
    )
  );

// Pure
UsersList({ users }); //  PersonProfile not rendered yet

// Impure
root.render(UsersList({ users })); // 3x render PersonProfile
