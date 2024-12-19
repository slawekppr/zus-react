import React from "react";
import AlbumCard from "./AlbumCard";
import { Album } from "../../common/model/Album";

type Props = {
  results: Album[];
};

const ResultsGrid = ({ results }: Props) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-2">
      {results.map((result) => (
        <AlbumCard
          album={result}
          key={result.id}
          showDetailsButton
        />
      ))}
    </div>
  );
};

export default ResultsGrid;
