import { useState } from "react";
import type { User } from "./User";

type Props = {
  user: User;
  children?: React.ReactNode;
};

export const PersonProfile = ({ user, children }: Props) => {
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
