// tsrafce
import { Button } from "primereact/button";
import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "playlist 123",
    public: true,
    description: "Best playlist",
  };

/* TODO:
  - Use mock data in HTML
  - add data to id,title,data- props
  - Public Yes / No 
  - Public Red / Green
*/

  return (
    <div>
      {/* .grid.gap-5>.grid.gap-2*3>strong{Name}+div{Playlist $$$}^.flex.justify-between>Button{Edit} */}
      
      <div className="grid gap-5" id="..." title=".." data-playlist-id="...">
        
        <div className="grid gap-2">
          <strong>Name</strong>
          <div>Playlist 001</div>
        </div>

        <div className="grid gap-2">
          <strong>Public</strong>
          <div>Yes</div>
        </div>
        
        <div className="grid gap-2">
          <strong>Description</strong>
          <div>awesome playlist</div>
        </div>
        
        <div className="flex justify-between">
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
