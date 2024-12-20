import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { is } from "ramda";
import React, { useState } from "react";
import PlaylistList from "../../playlists/components/PlaylistList";
import { Track } from "../../common/model/Album";

type Props = {
  data: Track;
  onAdd(playlistId: string): void;
};

const AddToPlaylistDialog = ({ data, onAdd }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contents">
      <Button
        size="small"
        icon="pi pi-plus"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Dialog visible={isOpen} onHide={() => setIsOpen(false)}>
        Add {data.name} to playlist:
        <PlaylistList
          createNew={false}
          onSelect={(id) => {
            onAdd(id);
            setIsOpen(false)
          }}
        />
      </Dialog>
    </div>
  );
};

export default AddToPlaylistDialog;
