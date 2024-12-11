import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { Album } from "../../common/model/Album";

type Props = {};

// https://refactoring.guru/design-patterns/mediator

const AlbumSearchView = (props: Props) => {
  const [results, setResults] = useState<Album[]>([]);

  function search(query: string) {
    fetchAlbumSearchResults(query) //
      .then((d) => setResults(d));
  }

  return (
    <div>
      {/* .grid.gap-5>div*2 */}
      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={search} />
        </div>
        <div>
          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
