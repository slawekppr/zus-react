import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")!);

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import UserContextProvider from "./common/context/UserContext.tsx";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router";
import PlaylistView from "./playlists/containers/PlaylistView.tsx";
import AlbumSearchView from "./music/containers/AlbumSearchView.tsx";
import { checkLogin } from "./common/services/Auth.ts";
import AlbumDetailView from "./music/containers/AlbumDetailView.tsx";
import { router } from "./router.tsx";


root.render(
  <StrictMode>
    <PrimeReactProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </PrimeReactProvider>
  </StrictMode>
);

// Microfrontends:
// import Naglowek from "http://placki.com.zis.pl/dist/naglowek.components.js";
// const naglowek = createRoot("#naglowek");

// naglowek.render(<Naglowek props={opcje} onLogin={...} /> );
