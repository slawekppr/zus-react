import { mockPlaylists } from "../common/fixtures/mockPlaylists";
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

export const Select = (payload: Playlist["id"]) =>
  ({ type: "Select", payload } as const);
export const ShowCreator = () => ({ type: "ShowCreator" } as const);
export const ShowEditor = () => ({ type: "ShowEditor" } as const);
export const Cancel = () => ({ type: "Cancel" } as const);

export const LoadPlaylists = (
  payload: { data: Playlist[]; error?: never } | { error: Error; data?: never }
) => ({ type: "Load", payload } as const);

export const SavePlaylist = (payload: Playlist) =>
  ({ type: "Save", payload } as const);
export const CreatePlaylist = (payload: Playlist) =>
  ({ type: "CreatePlaylist", payload } as const);

type Action = ReturnType<
  | typeof Select
  | typeof ShowCreator
  | typeof ShowEditor
  | typeof Cancel
  | typeof SavePlaylist
  | typeof CreatePlaylist
  | typeof LoadPlaylists
>;

export const playlistsReducer = (state: State, action: Action): State => {
  console.log("Action", action.type, action);
  
  switch (action.type) {
    case "Select":
      return { ...state, selectedId: action.payload };
    case "Cancel":
      return { ...state, mode: "details" };
    case "ShowCreator":
      return { ...state, mode: "creator" };
    case "ShowEditor":
      return { ...state, mode: "editor" };
    case "CreatePlaylist": {
      const draft = action.payload;
      return {
        ...state,
        mode: "details",
        selectedId: draft.id,
        items: [...state.items, draft],
      };
    }
    case "Save": {
      const draft = action.payload;
      return {
        ...state,
        mode: "details",
        selectedId: draft.id,
        items: updateItem(draft)(state.items),
      };
    }
    case "Load":
      if (action.payload.error) return { ...state, error: action.payload.error };
      return { ...state, items: action.payload.data };

    default:
      action satisfies never;
      return state;
  }
};
