import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

type Props = {};

const AlbumCard = (props: Props) => {
  return (
    <Card
      subTitle="Simple Card"
      header={
        <img src="https://placecats.com/millie/300/300" alt="album name" />
      }
      footer={
        <Button size="small">Details</Button>
      }
    >
      {/* <p className="m-0"></p> */}
    </Card>
  );
};

export default AlbumCard;
