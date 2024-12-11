import { Button } from "primereact/button";
import React from "react";
import { login } from "../services/Auth";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <div className="bg-primary-500">
        <div className="container  flex justify-between items-center">
          <h1 className="text-5xl  text-white p-5">Witaj w ZUS</h1>
          <Button onClick={login}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
