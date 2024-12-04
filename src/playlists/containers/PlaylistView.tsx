import React, { useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";

type Modes = "details" | "editor" | "creator";

const PlaylistView = () => {
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [mode, setMode] = useState<Modes>("details");
  const [selectedId, setSelectedId] = useState<string>();
  // const [selected, setSelected] = useState<Playlist | undefined>(playlists[0]);
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id));
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const createPlaylist = (draft: Playlist) => {};

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
          {/* {mode == "details" && selected && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )} */}
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
          {mode == "creator" && (
            <PlaylistEditor
              onCancel={showDetails}
              onSave={createPlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
