import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { Album } from "../../common/model/Album";
import UserWidget from "../../common/context/UserWidget";
import { ProgressSpinner } from "primereact/progressspinner";

type Props = {};

// https://refactoring.guru/design-patterns/mediator

const AlbumSearchView = (props: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    if (!query) return; // validate deps[]

    const huston = new AbortController();

    setIsLoading(true);
    setError(undefined);

    fetchAlbumSearchResults(query, { signal: huston.signal })
      .then((d) => setResults(d))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => huston.abort("Cancel"); // if deps[] change
  }, [query]);

  return (
    <div>
      {/* .grid.gap-5>div*2 */}
      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={setQuery} />
        </div>
        <div>
          {isLoading && <ProgressSpinner className="mx-auto block my-5" />}

          {error instanceof Error && (
            <p className="text-red-500 border-red-500 border border-solid p-5 my-5">
              {error.message}
            </p>
          )}

          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
