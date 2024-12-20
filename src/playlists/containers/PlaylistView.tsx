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
import type { Playlist } from "../../common/model/Playlist";
import { appendItem, updateItem } from "./utils";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchPlaylistById } from "../../common/services/MusicAPI";
import { PlaylistDetailsLoader, queryClient } from "../../main";
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
import { Outlet, Route, Routes } from "react-router";
import { Store, ThunkDispatch } from "@reduxjs/toolkit";
import { LoadPlaylistsThunkAction } from "./LoadPlaylistsThunkAction";
import { musicAPI } from "../../api/musicAPIQueries";

const PlaylistView = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList createNew />
        </div>

        <div className="grid gap-5">
          <Routes>
            <Route path="create" element={<PlaylistEditor />} />
            <Route
              path=":playlistId"
              loader={PlaylistDetailsLoader}
              element={<PlaylistDetails />}
            />
            <Route path=":playlistId/edit" element={<PlaylistEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;

export const Component = PlaylistView;
