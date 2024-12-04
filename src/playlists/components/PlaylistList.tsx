import React, { useState } from "react";
import { mockPlaylists } from "./mockPlaylists";

type Props = {};

const PlaylistList = (props: Props) => {
  const playlists = [];

  const [selectedId, setSelectedId] = useState("");

  const selectById = (id: string) => {
    setSelectedId(id);
  };

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
            onClick={() => selectById(playlist.id)}
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
