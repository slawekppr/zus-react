import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
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
import {
  playlistsReducer,
  initialState,
  Select,
  ShowCreator,
  ShowEditor,
  Cancel,
  SavePlaylist,
  CreatePlaylist,
} from "../../store/PlaylistsStore";

const PlaylistView = () => {
  const [state, dispatch] = useReducer(playlistsReducer, initialState);

  const { mode, items: playlists, selectedId } = state;

  const selected = useMemo(
    () => playlists.find((p) => p.id == selectedId),
    [playlists, selectedId]
  );

  const onSelect = (payload: string) => dispatch(Select(payload));

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={onSelect}
          />
          <Button onClick={() => dispatch(ShowCreator())}>Create new</Button>
        </div>

        <div className="grid gap-5">
          {mode == "details" && (
            <PlaylistDetails
              playlist={selected}
              onEdit={() => dispatch(ShowEditor())}
            />
          )}
          {mode == "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={() => dispatch(Cancel())}
              onSave={(draft) => dispatch(SavePlaylist(draft))}
            />
          )}
          {mode == "creator" && (
            <PlaylistEditor
              onCancel={() => dispatch(Cancel())}
              onSave={(draft) => dispatch(CreatePlaylist(draft))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
