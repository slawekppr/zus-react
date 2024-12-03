import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// import { users } from "./users.tsx";
// import { UsersList } from "./UsersList.tsx";
// root.render(<UsersList users={users} />);

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
