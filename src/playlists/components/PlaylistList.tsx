import React, { useState } from "react";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { useAppDispatch, useAppSelector } from "../../store";
import { playlistsSlice } from "../../store/playlists";
import { Button } from "primereact/button";

type Props = {};

// Controlled (state)
const PlaylistList = React.memo(
  ({}: Props) => {
    const playlists = useAppSelector(playlistsSlice.selectors.playlists);
    const selectedId = useAppSelector(playlistsSlice.selectors.selectedId);
    const dispatch = useAppDispatch();

    return (
      <div>
        <div className="divide-y divide-slate-300 divide-solid">
          {playlists.map((playlist, i) => (
            <div
              className={`p-4 ${
                selectedId === playlist.id
                  ? "bg-pink-500 text-white"
                  : "cursor-pointer hover:bg-pink-200"
              }`}
              onClick={() =>
                dispatch(playlistsSlice.actions.Select(playlist.id))
              }
              key={playlist.id}
            >
              {i + 1}. {playlist.name}
            </div>
          ))}
        </div>

        <Button onClick={() => dispatch(playlistsSlice.actions.ShowCreator())}>
          Create new
        </Button>
      </div>
    );
  }
  // propsAreEqual?:
  // (prevProps: Readonly<Props>, nextProps: Readonly<Props>) =>
  //   prevProps.playlists === nextProps.playlists &&
  //   prevProps.selectedId === nextProps.selectedId
);

export default PlaylistList;
