import { mockAlbums } from "../fixtures/mockAlbums";
import { Album } from "../model/Album";
import { getToken } from "./Auth";

// export const fetchAlbumSearchResults = (query = "") => {
//   console.log("Searching ", query);

//   return Promise.resolve(mockAlbums);
// };

export const fetchAlbumSearchResults = (query = "", init?: RequestInit) => {
  return fetch(
    "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        type: "album",
        q: query,
      }),
    {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Server Error"))))
    .then((d) => d.albums.items as Album[]);
  // .then(console.log);

  // return Promise.resolve(mockAlbums);
};

export const fetchAlbumById = (id = "", init?: RequestInit) => {
  return fetch("https://api.spotify.com/v1/albums/" + id, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
