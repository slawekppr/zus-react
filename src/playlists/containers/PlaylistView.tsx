import React, { useEffect, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { appendItem, updateItem } from "./utils";

type Modes = "details" | "editor" | "creator";

const PlaylistView = () => {
  const [mode, setMode] = useState<Modes>("details");

  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [selectedId, setSelectedId] = useState<string>();
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: string) => {
    if (mode !== "details") return;
    setSelectedId(id);
    // setSelected(playlists.find((p) => p.id === id));
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();

    setPlaylists(appendItem(draft));

    setSelectedId(draft.id);
    // setSelected(draft);
    setMode("details");
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(updateItem(draft));

    setSelectedId(draft.id);
    // setSelected(draft);
    setMode("details");
  };

  const showCreator = () => {
    setSelected(undefined);
    // setSelectedId(undefined);
    setMode("creator");
  };

  // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setSelected(playlists.find((p) => p.id === selectedId));

  useEffect(() => {
    console.log("effect - after reach Render");
  });

  useEffect(() => {
    setSelected(playlists.find((p) => p.id === selectedId));
    console.log("effect - after Render if deps[] changed ");
  }, [selectedId]);

  console.log("render");

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
          <Button onClick={showCreator}>Create new</Button>
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
          {mode == "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
