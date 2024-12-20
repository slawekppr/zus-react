// tsrafce
import { Button } from "primereact/button";
import React from "react";
import type { Playlist } from "../../common/model/Playlist";
import { useAppDispatch, useAppSelector } from "../../store";
import { playlistsSlice } from "../../store/playlists";
import { useNavigate, useParams } from "react-router";

type Props = {};

const PlaylistDetails = ({}: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  

  const { playlistId } = useParams();
  const playlist = useAppSelector((state) =>
    playlistsSlice.selectors.selectedById(state, playlistId)
  );

  if (!playlist)
    return (
      <div className="text-blue-500 p-5 border border-solid">
        No playlist selected
      </div>
    );

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
          <Button onClick={() => navigate(`/playlists/${playlist.id}/edit`)}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
