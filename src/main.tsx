import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import UserContextProvider from "./common/context/UserContext.tsx";
import {
  Route,
  BrowserRouter,
  redirect,
  RouterProvider,
  Navigate,
  Routes,
  Outlet,
} from "react-router";
import App from "./App.tsx";
import { checkLogin } from "./common/services/Auth.ts";
import { router } from "./router.tsx";
import PlaylistView from "./playlists/containers/PlaylistView.tsx";
import AlbumSearchView from "./music/containers/AlbumSearchView.tsx";
import AlbumDetailView from "./music/containers/AlbumDetailView.tsx";
import { PageNotFound } from "./PageNotFound.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        {/* <RouterProvider router={router}/> */}
        <PrimeReactProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<App />}
                loader={() => {
                  checkLogin();
                  return true;
                }}
              >
                <Route index element={<Navigate to="/music/search" />} />

                <Route path="playlists" element={<PlaylistView />} />
                <Route path="music">
                  <Route index element={<Navigate to="/music/search" />} />
                  <Route
                    path="search"
                    element={
                      <div>
                        <div className="grid grid-cols-2 gap-4">
                          <AlbumSearchView />
                          <AlbumSearchView />
                        </div>
                      </div>
                    }
                  />
                  <Route path="albums/:albumId" element={<AlbumDetailView />} />
                </Route>
                <Route
                  path="callback"
                  element={<Navigate to="/music/search" />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PrimeReactProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </StrictMode>
);

// Microfrontends:
// import Naglowek from "http://placki.com.zis.pl/dist/naglowek.components.js";
// const naglowek = createRoot("#naglowek");

// naglowek.render(<Naglowek props={opcje} onLogin={...} /> );
