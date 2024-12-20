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
import { AppDispatch, useAppDispatch, useAppSelector } from "../../store";
import { playlistsSlice } from "../../store/playlists";
import { Outlet } from "react-router";
import { Store, ThunkDispatch } from "@reduxjs/toolkit";

const { actions, selectors } = playlistsSlice;

const LoadPlaylistsThunkAction = () => (dispatch: AppDispatch) => {
  fetchMyPlaylists()
    .then((data) => {
      dispatch(actions.LoadPlaylists({ data: mockPlaylists }));
    })
    .catch((error) =>
      dispatch(actions.LoadPlaylists({ error: error.message }))
    );
};

const PlaylistView = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(LoadPlaylistsThunkAction()); // ThunkMiddleware
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList />
        </div>

        <div className="grid gap-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
