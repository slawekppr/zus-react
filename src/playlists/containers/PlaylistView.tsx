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
  LoadPlaylists,
} from "../../store/PlaylistsStore";
import { useAppDispatch, useAppSelector } from "../../store";
import { playlistsSlice } from "../../store/playlists";

const actions = playlistsSlice.actions;
const selectors = playlistsSlice.selectors;

const PlaylistView = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(selectors.mode);
  const playlists = useAppSelector(selectors.playlists);
  const selectedId = useAppSelector(selectors.selectedId);
  const selected = useAppSelector(selectors.selected);

  useEffect(() => {
    fetchMyPlaylists()
      .then((data) => dispatch(actions.LoadPlaylists({ data })))
      .catch((error) => dispatch(actions.LoadPlaylists({ error })));
  }, []);

  const onSelect = (payload: string) => dispatch(actions.Select(payload));

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={onSelect}
          />
          <Button onClick={() => dispatch(actions.ShowCreator())}>
            Create new
          </Button>
        </div>

        <div className="grid gap-5">
          {mode == "details" && (
            <PlaylistDetails
              playlist={selected}
              onEdit={() => dispatch(actions.ShowEditor())}
            />
          )}
          {mode == "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={() => dispatch(actions.Cancel())}
              onSave={(draft) => dispatch(actions.SavePlaylist(draft))}
            />
          )}
          {mode == "creator" && (
            <PlaylistEditor
              onCancel={() => dispatch(actions.Cancel())}
              onSave={(draft) => dispatch(actions.CreatePlaylist(draft))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
