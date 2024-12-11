import { useState, useEffect } from "react";
import { Album } from "../../common/model/Album";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

// https://refactoring.guru/design-patterns/mediator

export function useFetchAlbumSearch(query: string) {
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

  return {
    isLoading,
    error,
    results,
  };
}
