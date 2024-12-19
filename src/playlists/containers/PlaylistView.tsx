import React, { useCallback, useEffect, useMemo, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { appendItem, updateItem } from "./utils";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  fetchMyPlaylists,
  fetchPlaylistById,
} from "../../common/services/MusicAPI";
import { queryClient } from "../../main";

type Modes = "details" | "editor" | "creator";

const PlaylistView = () => {
  const [mode, setMode] = useState<Modes>("details");
  const [selectedId, setSelectedId] = useState<string>();
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const selected = useMemo(
    () => playlists.find((p) => p.id === selectedId),
    [selectedId, playlists]
  );

  const showDetails = useCallback(() => setMode("details"), []);
  const showEditor = useCallback(() => setMode("editor"), []);

  const createPlaylist = useCallback((draft: Playlist) => {
    draft.id = crypto.randomUUID();
    setPlaylists(appendItem(draft));
    setSelectedId(draft.id);
    setMode("details");
  }, []);

  const savePlaylist = useCallback(
    (draft: Playlist) => {
      setPlaylists(updateItem(draft));
      setSelectedId(draft.id);
      showDetails();
    },
    [showDetails]
  );

  const showCreator = useCallback(() => {
    setSelectedId(undefined);
    setMode("creator");
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
          <Button onClick={showCreator}>Create new</Button>
        </div>

        <div className="grid gap-5">
          {
            <>
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
            </>
          }
          {mode == "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
