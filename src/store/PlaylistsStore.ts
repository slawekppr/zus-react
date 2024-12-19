import { mockPlaylists } from "../common/fixtures/mockPlaylists";
import { Playlist } from "../common/model/Playlist";
import { updateItem } from "../playlists/containers/utils";

type Modes = "details" | "editor" | "creator";

type State = {
  mode: Modes;
  items: Playlist[];
  selectedId?: Playlist["id"];
};

export const initialState: State = {
  mode: "details",
  items: mockPlaylists,
};

export const Select = (payload: Playlist["id"]) =>
  ({ type: "Select", payload } as const);
export const ShowCreator = () => ({ type: "ShowCreator" } as const);
export const ShowEditor = () => ({ type: "ShowEditor" } as const);
export const Cancel = () => ({ type: "Cancel" } as const);
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
    default:
      return state;
  }
};
