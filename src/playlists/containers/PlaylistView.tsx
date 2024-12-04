import React, { useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";

type Modes = "details" | "editor";

const PlaylistView = () => {
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [mode, setMode] = useState<Modes>("details");
  const [selectedId, setSelectedId] = useState("123");
  const [selected, setSelected] = useState(playlists[0]);

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);

    // const found = playlists.find((p) => p.id === id) as any;
    // const found = playlists.find((p) => p.id === id) as Playlist;
    // const found = playlists.find((p) => p.id === id)!;
    // const found = {} as Playlist;

    setSelected(found);
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
    setSelected(draft);
    setMode("details");
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
        </div>

        <div className="grid gap-5">
          {mode == "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
          {mode == "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
