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

      {/* 
        Warning: You provided a `value` prop to a form field without an `onChange` handler. 
        This will render a read-only field. 
        If the field should be mutable use `defaultValue`. 
        Otherwise, set either `onChange` or `readOnly`. 
      */}
      
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" value={playlist.name} />
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
