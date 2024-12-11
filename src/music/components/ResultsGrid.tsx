import React from "react";
import AlbumCard from "./AlbumCard";

type Props = {};

const ResultsGrid = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-2">
      {[1, 2, 3, 4].map((x) => (
        <AlbumCard />
      ))}
    </div>
  );
};

export default ResultsGrid;
