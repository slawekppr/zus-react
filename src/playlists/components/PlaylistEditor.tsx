import React, { useState } from "react";

type Props = {};
const mockPlaylist = {
  id: "123",
  name: "playlist 123",
  public: false,
  description: "Best playlist",
};

const PlaylistEditor = (props: Props) => {
  const [playlist, setPlaylist] = useState(mockPlaylist);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = event.target;

    let value: string | boolean = target.value;

    if (target instanceof HTMLInputElement && target.type == "checkbox") {
      value = target.checked;
    }
    // TODO: <select>, radio, ...
    // event.target.tagName == "textarea";
    // event.target.name == "description";

    setPlaylist({ ...playlist, [event.target.name]: value });
  };

  return (
    <div>
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
      </div>
    </div>
  );
};

export default PlaylistEditor;
