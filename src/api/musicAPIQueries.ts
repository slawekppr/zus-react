import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../common/services/Auth";
import { Playlist } from "../common/model/Playlist";
import { PagingObject } from "../common/model/Album";

export const musicAPI = createApi({
  reducerPath: "musicapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders(headers, api) {
      headers.append("Authorization", `Bearer ${getToken()}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlaylists: builder.query<Playlist[], void>({
      query: () => `me/playlists`,
      transformResponse(res: PagingObject<Playlist>, meta, arg) {
        return res.items;
      },
    }),
    getPlaylistById: builder.query<Playlist, Playlist["id"]>({
      query: (id) => `playlists/${id}`,
    }),
    savePlaylist: builder.mutation<Playlist, Playlist["id"]>({
      query: (id) => `playlists/${id}`,
    }),
  }),
});

export const { useGetPlaylistsQuery, useGetPlaylistByIdQuery } = musicAPI;
