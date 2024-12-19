import { Button } from "primereact/button";
import React, { useState } from "react";
import type { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/hooks/useFocus";
import { usePlaylistUpdate } from "../mutations/playlists";
import {
  fetchMyPlaylists,
  fetchPlaylistById,
} from "../../common/services/MusicAPI";
import RichEditor from "../../common/components/RichEditor";


type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave(draft: Playlist): void;
};

const EMPTY_PLAYLIST = {
  id: "",
  description: "",
  name: "",
  public: false,
};

const PlaylistEditor = ({
  onCancel,
  onSave,
  playlist: playlistFromParent = EMPTY_PLAYLIST,
}: Props) => {
  const [playlist, setPlaylist] = useState(playlistFromParent);

  const submit = () => {
    onSave(playlist);
  };
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = event.target;

    let value: string | boolean = target.value;
    target.type;

    if (target instanceof HTMLInputElement && target.type == "checkbox") {
      // if ("checked" in target) {
      value = target.checked;
    }

    setPlaylist({ ...playlist, [event.target.name]: value });
  };

  const { ref: nameInputRef } = useFocus();

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            type="text"
            // ref={console.log}
            ref={nameInputRef}
            value={playlist.name}
            name="name"
            onChange={changeHandler}
          />
          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input
              type="checkbox"
              checked={playlist.public}
              name="public"
              onChange={changeHandler}
            />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea
            value={playlist.description}
            name="description"
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className="flex justify-between">
          <Button severity="warning" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={submit}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
