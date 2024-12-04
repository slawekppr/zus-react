import React from "react";

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
  const selectedId = "234";
  const selectById = (id: string) => {
    // ???
  };

  /* 
    - Render dynamic list, 
    - highlight selected, 
    - click to change selection
  */

  return (
    <div>
      {/* Emmet Ctrl + Space -> Enter */}
      {/* .divide-y.divide-slate-300.divide-solid>.px-4.px-2*3{$. Playlist $$$} */}
      <div className="divide-y divide-slate-300 divide-solid">
        <div className="p-4">1. Playlist 001</div>
        <div className="p-4 bg-pink-500 text-white">2. Playlist 002</div>
        <div className="p-4">3. Playlist 003</div>
      </div>
    </div>
  );
};

export default PlaylistList;
