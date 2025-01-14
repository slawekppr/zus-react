import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlist } from "../common/model/Playlist";
import { updateItem } from "../playlists/containers/utils";
type Modes = "details" | "editor" | "creator";

type State = {
  mode: Modes;
  error?: string;
  items: Playlist[];
  selectedId?: Playlist["id"];
};

export const initialState: State = {
  mode: "details",
  items: [],
};

type DataOrError<T> =
  | { data: T; error?: never }
  | { error: string & {}; data?: never };

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
    LoadPlaylist(state, action: PayloadAction<DataOrError<Playlist>>) {
      if (action.payload.error) {
        state.error = action.payload.error;
        return;
      }
      const draft = action.payload.data!;
      for (let index in state.items) {
        if (state.items[index].id !== draft.id) continue;
        state.items[index] = draft;
      }
    },
    LoadPlaylists(state, action: PayloadAction<DataOrError<Playlist[]>>) {
      if (action.payload.error) {
        state.error = action.payload.error;
        return;
      }
      state.items = action.payload.data!;
    },
    SavePlaylist(state, action: PayloadAction<Playlist>) {
      state.mode = "details";
      state.selectedId = action.payload.id;
      const draft = action.payload;

      for (let index in state.items) {
        if (state.items[index].id !== draft.id) continue;
        state.items[index] = draft;
      }
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
    // useMemo:
    selected: (state) => state.items.find((p) => p.id == state.selectedId),
    selectedById: (state, id?: Playlist["id"]) =>
      state.items.find((p) => p.id == id),
  },
});
