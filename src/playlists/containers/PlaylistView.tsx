import React, { useEffect, useMemo, useState } from "react";
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

  const playlists = useQuery({
    queryKey: ["my/playlists"],
    queryFn: () => fetchMyPlaylists(),
    initialData: [],
  });

  const selected = useQuery({
    queryKey: ["playlists", selectedId],
    queryFn: () => fetchPlaylistById(selectedId),
    enabled: !!selectedId,
  });

  const selectPlaylistById = (id: string) => {
    if (mode !== "details") return;
    setSelectedId(id);
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();

    setSelectedId(draft.id);
    setMode("details");
  };

  const savePlaylist = (draft: Playlist) => {
    setSelectedId(draft.id);
    setMode("details");
  };

  const showCreator = () => {
    setSelectedId(undefined);
    setMode("creator");
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList
            playlists={playlists.data}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
          <Button onClick={showCreator}>Create new</Button>
        </div>

        <div className="grid gap-5">
          {selectedId && selected.isPending && <p>Loading playlist...</p>}
          {selectedId && selected.isFetching && <p>Updating playlist...</p>}
          {/* {selected.isLoading && <p>Loading playlist first time...</p>} */}

          {
            <>
              {mode == "details" && (
                <PlaylistDetails playlist={selected.data} onEdit={showEditor} />
              )}
              {mode == "editor" && (
                <PlaylistEditor
                  playlist={selected.data}
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
