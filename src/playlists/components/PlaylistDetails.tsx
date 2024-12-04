// tsrafce
import { Button } from "primereact/button";
import React from "react";
import type { Playlist } from "../../common/model/Playlist";

type Props = {
  playlist: Playlist;
  onEdit: () => void;
};

const PlaylistDetails = ({ onEdit, playlist }: Props) => {
  
  return (
    <div>
      <div
        className="grid gap-5"
        id={`playlist_${playlist.id}`}
        title={playlist.name}
        // placki={123} // Error
        data-playlist-id={playlist.id}
      >
        <div className="grid gap-2">
          <strong>Name</strong>
          <div>{playlist.name}</div>
        </div>

        <div className="grid gap-2">
          <strong>Public</strong>
          <div
            style={{
              color: playlist.public ? "red" : "green",
            }}
          >
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>

        <div className="grid gap-2">
          <strong>Description</strong>
          <div>{playlist.description}</div>
        </div>

        <div className="flex justify-between">
          <Button onClick={onEdit}>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
