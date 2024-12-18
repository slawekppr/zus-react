import React from "react";
import { useNavigate, useParams } from "react-router";
import { fetchAlbumById } from "../../common/services/MusicAPI";
import { useQuery } from "@tanstack/react-query";
import AlbumCard from "../components/AlbumCard";
import { mockAlbums } from "../../common/fixtures/mockAlbums";

type Props = {};

const AlbumDetailView = (props: Props) => {
  const { albumId } = useParams();
  const album = mockAlbums[0];
  fetchAlbumById;
  useQuery;

  return (
    <div>
      <small className="text-gray-300">{albumId}</small>
      <h1 className="text-4xl mb-5">Album tytul here!</h1>

      <div className="grid gap-5 grid-cols-2">
        <div>
          <AlbumCard album={album} />
        </div>
        <div>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <strong>Artist</strong>
              <div>ktostam...</div>
              <strong>Utwory</strong>
              <div>42</div>
            </div>
          </div>
          <div className="divide-y divide-solid divide-slate-200">
            <div>1. Track 123</div>
            <div>1. Track 123</div>
            <div>1. Track 123</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;
