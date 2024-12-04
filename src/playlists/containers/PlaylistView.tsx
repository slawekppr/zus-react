import React from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
// tsrafce

type Props = {};

const PlaylistView = (props: Props) => {
  return (
    <div>
      {/* Emmet + tailwind  */}
      {/* .grid.grid-cols-2.gap-5>div.grid.gap-2*2 */}
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList />
        </div>

        <div className="grid gap-5">
          <PlaylistDetails />
          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
