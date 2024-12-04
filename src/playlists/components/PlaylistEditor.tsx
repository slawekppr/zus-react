import React from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "playlist 123",
    public: false,
    description: "Best playlist",
  };

  const handleNameChange = (event: ????) => {}


  return (
    <div>
 
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={handleNameChange} />
          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" defaultChecked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea defaultValue={playlist.description}></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
