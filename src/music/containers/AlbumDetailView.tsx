import React from "react";
import { useNavigate, useParams } from "react-router";

type Props = {};

const AlbumDetailView = (props: Props) => {
  const {albumId} = useParams();
  return <div>AlbumDetailView {albumId}</div>;
};

export default AlbumDetailView;
