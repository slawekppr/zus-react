import React, { useState } from "react";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";

type Props = {
  playlists: Playlist[];
  onSelect: (id: string) => void;
  selectedId: string;
};

// Controlled (state)
const PlaylistList = ({ playlists, onSelect, selectedId }: Props) => {
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
            onClick={() => onSelect(playlist.id)}
            key={playlist.id}
          >
            {i + 1}. {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
