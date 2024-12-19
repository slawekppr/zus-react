import React, { useCallback, useEffect, useMemo, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { appendItem, updateItem } from "./utils";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  fetchMyPlaylists,
  fetchPlaylistById,
} from "../../common/services/MusicAPI";
import { queryClient } from "../../main";

type Modes = "details" | "editor" | "creator";

type State = {
  mode: Modes;
  items: Playlist[];
  selectedId?: Playlist["id"];
  selected?: Playlist;
};

const initialState: State = {
  mode: "details",
  items: mockPlaylists,
};

const Select = (payload: Playlist["id"]) =>
  ({ type: "Select", payload } as const);
const ShowCreator = () => ({ type: "ShowCreator" } as const);
const ShowEditor = () => ({ type: "ShowEditor" } as const);
const Cancel = () => ({ type: "Cancel" } as const);
const Save = (payload: Playlist) => ({ type: "Save", payload } as const);
const CreatePlaylist = (payload: Playlist) =>
  ({ type: "CreatePlaylist", payload } as const);

type Action = ReturnType<
  | typeof Select
  | typeof ShowCreator
  | typeof ShowEditor
  | typeof Cancel
  | typeof Save
  | typeof CreatePlaylist
>;

const playlistsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Select":
      return { ...state, selectedId: action.payload };
    default:
      return state;
  }
};

const PlaylistView = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          {/* <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={setSelectedId}
          /> */}
          {/* <Button onClick={showCreator}>Create new</Button> */}
        </div>

        <div className="grid gap-5">
          {/* {mode == "details" && (
                <PlaylistDetails playlist={selected} onEdit={showEditor} />
              )} */}
          {/* {mode == "editor" && (
                <PlaylistEditor
                  playlist={selected}
                  onCancel={showDetails}
                  onSave={savePlaylist}
                />
              )} */}
          {/* {mode == "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
