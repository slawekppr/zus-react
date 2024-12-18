import { useState, useEffect } from "react";
import { Album } from "../../common/model/Album";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

// https://refactoring.guru/design-patterns/mediator

export function useFetch<T, TParam>(
  param: TParam,
  fetcher: (param?: TParam, init?: RequestInit) => Promise<T>
) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    if (!param) return;

    const huston = new AbortController();

    setIsLoading(true);
    setError(undefined);

    fetcher(param, { signal: huston.signal })
      .then((d) => setData(d))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => huston.abort("Cancel"); // if deps[] change
  }, [param]);

  return {
    isLoading,
    error,
    data,
  };
}

export function useFetchAlbumSearch(query: string) {
  return useFetch(query, fetchAlbumSearchResults);
}

// export function useFetchPlaylist(query: string) {
//   return useFetch(query, fetchPlaylists);
// }

// export function useFetchAlbumSearch(query: string) {
//   const [results, setResults] = useState<Album[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<unknown>();

//   useEffect(() => {
//     if (!query) return; // validate deps[]

//     const huston = new AbortController();

//     setIsLoading(true);
//     setError(undefined);

//     fetchAlbumSearchResults(query, { signal: huston.signal })
//       .then((d) => setResults(d))
//       .catch((e) => setError(e))
//       .finally(() => setIsLoading(false));

//     return () => huston.abort("Cancel"); // if deps[] change
//   }, [query]);

//   return {
//     isLoading,
//     error,
//     results,
//   };
// }
