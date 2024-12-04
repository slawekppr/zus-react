import React from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { Button } from "primereact/button";
// tsrafce

type Props = {};

const PlaylistView = (props: Props) => {
  const mode = "details";

  const showEditor = () => {};
  const showDetails = () => {};

  return (
    <div>
      {/* Emmet + tailwind  */}
      {/* .grid.grid-cols-2.gap-5>div.grid.gap-2*2 */}
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList />
        </div>

        <div className="grid gap-5">
          {true  == true ? <PlaylistDetails /> : <PlaylistEditor />}

          <div className="flex justify-between">
            <Button severity="warning">Detalils</Button>
            <Button>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
