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
  DataRouter,
  redirect,
  RouterProvider,
  Navigate,
  Routes,
  Outlet,
  LoaderFunction,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router";
import App from "./App.tsx";
import { checkLogin } from "./common/services/Auth.ts";
import PlaylistView from "./playlists/containers/PlaylistView.tsx";
import AlbumSearchView from "./music/containers/AlbumSearchView.tsx";
import AlbumDetailView from "./music/containers/AlbumDetailView.tsx";
import { PageNotFound } from "./PageNotFound.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { HTTPError } from "ky";
import AnalyticsView from "./admin/AnalyticsView.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import PlaylistDetails from "./playlists/components/PlaylistDetails.tsx";
import PlaylistEditor from "./playlists/components/PlaylistEditor.tsx";
import { Playlist } from "./common/model/Playlist.tsx";
import { mockPlaylists } from "./common/fixtures/mockPlaylists.tsx";
import { playlistsSlice } from "./store/playlists.ts";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        return (
          failureCount < 3 &&
          error instanceof HTTPError &&
          [408, 413, 429, 500, 502, 503, 504].includes(error.response.status)
        );
      },
    },
    mutations: {},
  },
  // queryCache: new QueryCache({}),
});

export const PlaylistDetailsLoader: LoaderFunction<Playlist> = ({
  params,
  request,
  context,
}) => {
  store.dispatch(
    playlistsSlice.actions.LoadPlaylist({ data: mockPlaylists[0] })
  );
  return mockPlaylists[0];
};

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={<App />}
    loader={() => {
      checkLogin();
      return true;
    }}
  >
    <Route index element={<Navigate to="/music/search" />} />
    <Route path="analytics" element={<AnalyticsView />} />

    <Route path="playlists" element={<PlaylistView />}>
      <Route path="create" element={<PlaylistEditor />} />

      <Route
        path=":playlistId"
        loader={PlaylistDetailsLoader}
        element={<PlaylistDetails />}
      />

      <Route path=":playlistId/edit" element={<PlaylistEditor />} />
    </Route>

    <Route path="music">
      <Route index element={<Navigate to="/music/search" />} />
      <Route
        path="search"
        element={
          <div>
            <AlbumSearchView />
          </div>
        }
      />
      <Route path="albums/:albumId" element={<AlbumDetailView />} />
    </Route>
    <Route path="callback" element={<Navigate to="/music/search" />} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserContextProvider>
          <PrimeReactProvider>
            <RouterProvider router={router} />
          </PrimeReactProvider>
        </UserContextProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);

// Microfrontends:
// import Naglowek from "http://placki.com.zis.pl/dist/naglowek.components.js";
// const naglowek = createRoot("#naglowek");

// naglowek.render(<Naglowek props={opcje} onLogin={...} /> );
