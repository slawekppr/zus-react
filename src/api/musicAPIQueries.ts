import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../common/services/Auth";
import { Playlist } from "../common/model/Playlist";
import { PagingObject } from "../common/model/Album";
import { updateItem } from "../playlists/containers/utils";

export const musicAPI = createApi({
  reducerPath: "musicapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders(headers, api) {
      headers.append("Authorization", `Bearer ${getToken()}`);
      return headers;
    },
  }),
  tagTypes: ["playlist"],
  endpoints: (builder) => ({
    getPlaylists: builder.query<Playlist[], void>({
      query: () => `me/playlists`,
      transformResponse: (res: PagingObject<Playlist>, meta, arg) => res.items,
      providesTags: () => [{ type: "playlist", id: "LIST" }],
    }),

    getPlaylistById: builder.query<Playlist, Playlist["id"]>({
      query: (id) => `playlists/${id}`,
      providesTags: (result) => [{ type: "playlist", id: result?.id }],
      onCacheEntryAdded(arg, api) {
        // debugger;
      },
      onQueryStarted(queryArgument, queryLifeCycleApi) {
        queryLifeCycleApi.queryFulfilled.then(() => {
          const playlist = queryLifeCycleApi.getCacheEntry().data!;
          queryLifeCycleApi.dispatch(
            musicAPI.util.updateQueryData("getPlaylists", void 0, (data) => {
              updateItem(playlist)(data);
            })
          );
        });
      },
    }),

    savePlaylist: builder.mutation<
      void,
      Pick<Playlist, "id" | "name" | "public" | "description">
    >({
      query: ({ id, ...patch }) => ({
        url: `playlists/${id}`,
        method: "PUT",
        body: patch,
      }),
      onQueryStarted(queryArgument, mutationLifeCycleApi) {
        musicAPI.util.updateQueryData(
          "getPlaylistById",
          queryArgument.id,
          (data) => data
        );
      },
      invalidatesTags: (res, error, arg, meta) => {
        return [
          //   { type: "playlist", id: "LIST" },
          { type: "playlist", id: arg.id },
        ];
      },
    }),
  }),
});

export const {
  useGetPlaylistsQuery,
  useGetPlaylistByIdQuery,
  useSavePlaylistMutation,
} = musicAPI;
