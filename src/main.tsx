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

const PageNotFound = (
  <div>
    <h1 className="text-6xl text-center">404</h1>
    <div>Nie polecam ;-)</div>
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader() {
      checkLogin();
      return true;
    },
    children: [
      {
        // path: "/",
        index: true,
        loader: () => redirect("/music/search"),
      },
      {
        path: "playlists",
        element: <PlaylistView />,
      },
      {
        path: "music",
        // element: <div>Music:<Outlet/></div>,
        children: [
          {
            // path: "/",
            index: true,
            loader: () => redirect("/music/search"),
          },
          {
            path: "search",
            Component: AlbumSearchView,
          },
          {
            path: "albums/:albumId",
            element: <AlbumDetailView />,
          },
        ],
      },
      {
        path: "/callback",
        loader() {
          return redirect("/music/search");
        },
      },
      {
        path: "*",
        element: PageNotFound,
      },
    ],
  },
]);

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
