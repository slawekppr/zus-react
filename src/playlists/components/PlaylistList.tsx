import React, { useState } from "react";

type Props = {};

const mockPlaylists = [
  {
    id: "123",
    name: "playlist 123",
    public: false,
    description: "Awesome playlist",
  },
  {
    id: "234",
    name: "playlist 234",
    public: true,
    description: "Best playlist",
  },
  {
    id: "345",
    name: "playlist 345",
    public: false,
    description: "CoolF playlist",
  },
];
const PlaylistList = (props: Props) => {
  const playlists = mockPlaylists;

  const [selectedId, setSelectedId] = useState("123");

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
