import React, { useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
// tsrafce

enum MODES {
  details = 'details',
  editor = 'editor',
}

type Props = {};

const PlaylistView = (props: Props) => {
  const [mode, setMode] = useState<MODES>(MODES.details);

  const showDetails = () => {
    setMode(MODES.details);
  };

  const showEditor = () => {
    setMode(MODES.editor);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList />
        </div>

        <div className="grid gap-5">
          {mode == MODES.editor ? <PlaylistDetails /> : <PlaylistEditor />}

          <div className="flex justify-between">
            <Button severity="warning" onClick={showDetails}>
              Detalils
            </Button>
            <Button onClick={() => showEditor()}>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
