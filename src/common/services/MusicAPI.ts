import ky from "ky";
import { mockAlbums } from "../fixtures/mockAlbums";
import { Album, AlbumSearchResponse } from "../model/Album";
import { getToken } from "./Auth";

// axios $.getJSON $.ajax

export const fetchAlbumSearchResults = (query = "", init?: RequestInit) => {
  const req = ky.get<AlbumSearchResponse>("https://api.spotify.com/v1/search", {
    searchParams: {
      type: "album",
      q: query,
    },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    ...init,
  }).json() // Promise waiting for Response Promise and then Body JSON Promise

  return req.then((r) => r.json()).then((d) => d.albums.items as Album[]);
};

export const fetchAlbumSearchResults2 = (query = "", init?: RequestInit) => {
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
