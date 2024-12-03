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

class PeronP extends React.Component{
  state = {
    color:'red'
  }

  changeColorClick(){
    this.setState({
      ...this.state,
      color:'blue'
    })
  }
  render(): React.ReactNode {
    return React.createElement('div',null, this.state.color)
  }
}


const PersonProfile = ({ user, children }: Props) => {
  //  root.tutajjestem.hooks[0] ??
  const [color, setColor] = useState(user.color);
  
  if (color == "red") useState(); // root.tutajjestem.hooks[1]
  
  useState(); // root.tutajjestem.hooks[2]
  
  return React.createElement(
    "div",
    {
      id: `user_${user.id}`,
      className: "user-card",
      style: { color: color, border: "1px solid" },
    },
    user.pet // Conditional Rendering
      ? React.createElement("p", null, `${user.name} has a ${user.pet.name}`)
      : React.createElement("p", { style: {} }, `${user.name} has no pet`),
    children,
    React.createElement(
      "button",
      {
        onClick() {
          setColor(color == "red" ? user.color : "red"); // impure state + dirty
        },
      },
      "Select"
    )
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
