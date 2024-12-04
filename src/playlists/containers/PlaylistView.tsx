import React, { useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";

type Modes = "details" | "editor";

const PlaylistView = () => {
  const [mode, setMode] = useState<Modes>("details");

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList />
        </div>

        <div className="grid gap-5">
          {mode == "details" && <PlaylistDetails />}
          {mode == "editor" && <PlaylistEditor />}

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
