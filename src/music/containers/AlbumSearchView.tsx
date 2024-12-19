import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import UserWidget from "../../common/context/UserWidget";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetchAlbumSearch } from "./useFetchAlbumSearch";
import { useParams, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

const AlbumSearchView = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const query = searchParams.get("q") || "";

  // const { data: results = [], isLoading, error } = useFetchAlbumSearch(query!);

  const {
    data: results = [],
    isLoading,
    isFetching,
    isStale,
    error,
  } = useQuery({
    queryKey: ["albums/search", query /* page, limit, sort */],
    queryFn: ({ signal }) => fetchAlbumSearchResults(query, { signal }),
    enabled: !!query,
    select: (res) => res.albums.items,
  });

  return (
    <div>
      <div className="grid gap-5">
        <div>
          <SearchForm
            onSearch={(query) => setSearchParams({ q: query })}
            query={query}
          />
        </div>
        <div>
          {isLoading && <ProgressSpinner className="mx-auto block my-5" />}

          {error instanceof Error && (
            <p className="text-red-500 border-red-500 border border-solid p-5 my-5">
              {error.message}
            </p>
          )}

          {isFetching && <p>Updating data...</p>}

          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
