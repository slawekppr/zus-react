import React, { useState } from "react";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { useAppDispatch, useAppSelector } from "../../store";
import { playlistsSlice } from "../../store/playlists";
import { Button } from "primereact/button";
import { NavLink, useNavigate } from "react-router";
import { useGetPlaylistsQuery } from "../../api/musicAPIQueries";

type Props = {
  onSelect?: (id: string) => void;
  createNew: boolean;
};

// Controlled (state)
const PlaylistList = React.memo(
  ({ onSelect, createNew = true }: Props) => {
    // const playlists = useAppSelector(playlistsSlice.selectors.playlists);
    const navigate = useNavigate();

    const { data: playlists = [] } = useGetPlaylistsQuery();

    return (
      <div>
        <div className="divide-y divide-slate-300 divide-solid">
          {playlists.map((playlist, i) => (
            <NavLink
              onClick={(e) => {
                {
                  if (onSelect) {
                    e.preventDefault();
                    onSelect(playlist.id);
                  }
                }
              }}
              to={`/playlists/${playlist.id}`}
              className={({ isActive }) =>
                `p-4 block ${
                  isActive
                    ? "bg-pink-500 text-white"
                    : "cursor-pointer hover:bg-pink-200"
                }`
              }
              key={playlist.id}
            >
              {i + 1}. {playlist.name}
            </NavLink>
          ))}
        </div>

        {createNew && (
          <Button onClick={() => navigate("/playlists/create")}>
            Create new
          </Button>
        )}
      </div>
    );
  }
  // propsAreEqual?:
  // (prevProps: Readonly<Props>, nextProps: Readonly<Props>) =>
  //   prevProps.playlists === nextProps.playlists &&
  //   prevProps.selectedId === nextProps.selectedId
);

export default PlaylistList;
