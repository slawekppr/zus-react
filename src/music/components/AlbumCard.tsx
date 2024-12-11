import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import { Album } from "../../common/model/Album";

type Props = {
  album: Album;
};

const AlbumCard = ({ album }: Props) => {
  return (
    <Card
      subTitle={<>
        <div className="line-clamp-1">{album.name}</div>
      </>}
      header={<img src={album.images[0].url} alt="album name" />}
      footer={
        <>
          <div className="grid items-end">
            <Button size="small">Details</Button>
          </div>
        </>
      }
    ></Card>
  );
};

export default AlbumCard;
