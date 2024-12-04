import React, { useState } from "react";

type Props = {};
const mockPlaylist = {
  id: "123",
  name: "playlist 123",
  public: false,
  description: "Best playlist",
};

const PlaylistEditor = (props: Props) => {
  
  // const state = useState()
  // const value = state[0]
  // const setValue = state[1]
  // const [value, setValue] = state
  
  const [read,  writeAndRenderFn  ] = useState( initial )
  const [value, setValue] = useState()


  const [playlist, setPlaylist] = useState(mockPlaylist)

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    
    playlist.name = event.target.value;

    // event.target.checked;
  };

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={nameHandler} />
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
