import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import { Album } from "../../common/model/Album";
import { useNavigate } from "react-router";

type Props = {
  album: Album;
  showDetailsButton?: boolean;
};

const AlbumCard = React.memo(({ album, showDetailsButton = false }: Props) => {
  const go = useNavigate();

  return (
    <Card
      subTitle={
        <>
          <div className="line-clamp-1">{album.name}</div>
        </>
      }
      header={<img src={album.images[0].url} alt="album name" />}
      footer={
        <>
          {showDetailsButton && (
            <div className="grid items-end">
              <Button
                size="small"
                onClick={() =>
                  go("/music/albums/" + album.id)
                } /* TODO: <Link> */
              >
                Details
              </Button>
            </div>
          )}
        </>
      }
    ></Card>
  );
});

export default AlbumCard;
