import ky from "ky";
import { mockAlbums } from "../fixtures/mockAlbums";
import {
  Album,
  AlbumResponse,
  AlbumSearchResponse,
  PagingObject,
} from "../model/Album";
import { getToken } from "./Auth";
import { Playlist } from "../model/Playlist";

const MusicAPI = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
const albumsAPI = MusicAPI.extend((parent) => ({
  prefixUrl: `${parent.prefixUrl}/albums`,
}));

export const fetchAlbumSearchResults = (query = "", init?: RequestInit) => {
  return MusicAPI.get<AlbumSearchResponse>("search", {
    searchParams: {
      type: "album",
      q: query,
    },
    ...init,
  })
    .json()
    .then((d) => d.albums.items);
};

export const fetchAlbumById = (id = "", init?: RequestInit) => {
  return albumsAPI.get<AlbumResponse>(id, init);
};

export const fetchPlaylistById = (id = "", init?: RequestInit) => {
  return MusicAPI.get<Playlist>("playlists/" + id, init);
};

export const fetchMyPlaylists = (id = "", init?: RequestInit) => {
  return MusicAPI.get<PagingObject<Playlist>>("/me/playlists/", init);
};
