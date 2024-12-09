import { Button } from "primereact/button";
import React, { useState } from "react";
import type { Playlist } from "../../common/model/Playlist";

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

  return (
    <div>
      <pre>{JSON.stringify(playlist, null, 2)}</pre>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            type="text"
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
