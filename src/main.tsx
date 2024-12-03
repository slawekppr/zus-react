import React, { StrictMode } from "react";
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

const PersonProfile = ({ user, children }: Props) =>
  React.createElement(
    "div",
    {
      id: `user_${user.id}`,
      className: "user-card",
      style: { color: user.color, border: "1px solid" },
    },
    user.pet // Conditional Rendering
      ? React.createElement("p", null, `${user.name} has a ${user.pet.name}`)
      : React.createElement("p", { style: {} }, `${user.name} has no pet`),
    children
  );

const UsersList = ({ users }: { users: User[] }) =>
  React.createElement(
    "ul",
    null,
    users.map((user) =>
      // React.createElement("li", { key: user.id }, PersonProfile({ user }))
      React.createElement(
                                               // Suspeneded element
        "li", { key: user.id }, React.createElement(PersonProfile, { user })
      )
    )
  );

// const vdom = UsersList({ users }); // 3x render PersonProfile

UsersList({ users }); //  PersonProfile not rendered yet

root.render(UsersList({ users })); // 3x render PersonProfile
