import React from "react";
import { useNavigate, useParams } from "react-router";
import { fetchAlbumById } from "../../common/services/MusicAPI";
import { useQuery } from "@tanstack/react-query";
import AlbumCard from "../components/AlbumCard";
import { mockAlbums } from "../../common/fixtures/mockAlbums";
import { ProgressSpinner } from "primereact/progressspinner";

type Props = {};

const AlbumDetailView = (props: Props) => {
  const { albumId } = useParams();

  const { data: album, error, refetch } = useQuery({
    queryKey: ["albums/", albumId],
    queryFn: ({ signal }) => fetchAlbumById(albumId, { signal }),
    // enabled: false,
    // initialData: mockAlbums[0]
  });

  if(error instanceof Error) return <div className="text-red-500 p-5">{error.message}</div>
  if (!album) return <ProgressSpinner />;

  return (
    <div>
      <small className="text-gray-300">{albumId}</small>
      <h1 className="text-4xl mb-5">{album.name}</h1>

      <div className="grid gap-5 grid-cols-2">
        <div>
          <AlbumCard album={album} />
        </div>
        <div>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <strong>Artist</strong>
              <div>{album.artists[0].name}</div>
              <strong>Utwory</strong>
              <div>{album.total_tracks}</div>
            </div>
          </div>
          <div className="divide-y divide-solid divide-slate-600">
            {album.tracks.items.map((track, index) => (
              <div className="px-2 py-3">
                {index + 1}. {track.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;
