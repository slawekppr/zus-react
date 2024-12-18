import { createBrowserRouter, redirect } from "react-router";
import App from "./App";
import { checkLogin } from "./common/services/Auth";
import AlbumDetailView from "./music/containers/AlbumDetailView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import PlaylistView from "./playlists/containers/PlaylistView";
import { PageNotFound } from "./PageNotFound";

export const router = createBrowserRouter([
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
        element: <PageNotFound />,
      },
    ],
  },
]);
