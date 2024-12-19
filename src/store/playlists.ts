import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlist } from "../common/model/Playlist";
import { updateItem } from "../playlists/containers/utils";
type Modes = "details" | "editor" | "creator";

type State = {
  mode: Modes;
  items: Playlist[];
  error?: Error;
  selectedId?: Playlist["id"];
};

export const initialState: State = {
  mode: "details",
  items: [],
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    Select(state, action: PayloadAction<Playlist["id"]>) {
      state.selectedId = action.payload;
    },
    ShowCreator(state) {
      state.mode = "creator";
    },
    ShowEditor(state) {
      state.mode = "editor";
    },
    Cancel(state) {
      state.mode = "details";
    },
    LoadPlaylists(
      state,
      action: PayloadAction<
        { data: Playlist[]; error?: never } | { error: Error; data?: never }
      >
    ) {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.items = action.payload.data;
      }
    },
    SavePlaylist(state, action: PayloadAction<Playlist>) {
      state.mode = "details";
      state.selectedId = action.payload.id;

      state.items = updateItem(action.payload)(state.items);
    },
    CreatePlaylist(state, action: PayloadAction<Playlist>) {
      state.mode = "details";
      state.selectedId = action.payload.id;
      state.items.push(action.payload);
    },
  },
  selectors: {
    playlists: (state) => state.items,
    selectedId: (state) => state.selectedId,
    mode: (state) => state.mode,
    error: (state) => state.error,
    selected: (state) => state.items.find((p) => p.id == state.selectedId),
  },
});
