import React from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "playlist 123",
    public: false,
    description: "Best playlist",
  };

  return (
    <div>
      {/* .grid.gap-5>.grid.gap-2*3>label{Name}+input */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
