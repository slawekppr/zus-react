import React, { PropsWithChildren, useContext, useState } from "react";
import { login } from "../services/Auth";

interface User {
  id: string;
  display_name: string;
  email: string;
}
type UserContext = {
  user: User | null;
  login(): void;
  logout(): void;
  setTheme?(): void;
};

export const UserContext = React.createContext<UserContext | null>(null);

type Props = PropsWithChildren<{}>; //     children?: React.ReactNode | undefined;

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContext = {
    user,
    login() {
      setUser({ display_name: "Placki!" } as User);
      login()
    },
    logout() {
      setUser(null);
    },
    // setTheme() {},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw "Missing <UserContextProvider/>";

  return context;
}

export default UserContextProvider;
