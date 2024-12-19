import ky, { HTTPError, KyRequest, NormalizedOptions } from "ky";
import { mockAlbums } from "../fixtures/mockAlbums";
import {
  Album,
  AlbumResponse,
  AlbumSearchResponse,
  PagingObject,
} from "../model/Album";
import { getToken } from "./Auth";
import { Playlist } from "../model/Playlist";

const RequstAuthotizationHook = (
  request: KyRequest,
  options: NormalizedOptions
) => {
  // TODO: check token exprired, refresh token, update token...
  request.headers.append("Authorization", `Bearer ${getToken()}`);
  return request;
};

type SpotifyError = {
  error: {
    status: number;
    message: string;
  };
};

const HandleSpotifyErrorResponse = (error: HTTPError) => {
  return error.response.json<SpotifyError>().then((data) => {
    error.message = data.error.message;
    return error;
  });
};

export const MusicAPI = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  hooks: {
    beforeRequest: [RequstAuthotizationHook],
    beforeError: [HandleSpotifyErrorResponse],
  },
  retry: 0,
  // retry: {
  //   statusCodes: [408, 413, 429, 500, 502, 503, 504],
  //   delay: (attemptCount) => 0.3 * 2 ** (attemptCount - 1) * 1000,
  // },
});
const albumsAPI = MusicAPI.extend((parent) => ({
  prefixUrl: `${parent.prefixUrl}albums`,
}));

export const fetchAlbumSearchResults = (
  query = "",
  offset = 0,
  init?: RequestInit
) => {
  return MusicAPI.get<AlbumSearchResponse>("search", {
    searchParams: {
      type: "album",
      q: query,
      offset,
    },
    ...init,
  }).json();
  // .then((d) => d.albums.items);
};

export const fetchAlbumById = (id = "", init?: RequestInit) => {
  // return albumsAPI.get<AlbumResponse>(id, init);
  return MusicAPI.get<AlbumResponse>("albums/" + id, init).json();
};

export const fetchMyPlaylists = (init?: RequestInit) => {
  return MusicAPI.get<PagingObject<Playlist>>("me/playlists/", init)
    .json()
    .then((d) => d.items);
};
export const fetchPlaylistById = (id = "", init?: RequestInit) => {
  return MusicAPI.get<Playlist>("playlists/" + id, init).json();
};
