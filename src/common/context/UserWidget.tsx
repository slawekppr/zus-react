import React from "react";
import { useUser } from "./UserContext";
import { Button } from "primereact/button";

type Props = {};

const UserWidget = (props: Props) => {
  const { user, login, logout } = useUser();

  return (
    <div className="flex gap-5 items-center text-white text-2xl">
      <span>
        Hello{" "}
        {!user ? (
          <span onClick={login}>Guest</span>
        ) : (
          <span onClick={logout}>{user.display_name}</span>
        )}{" "}
      </span>
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default UserWidget;
