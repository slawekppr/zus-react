import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import UserWidget from "../../common/context/UserWidget";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetchAlbumSearch } from "./useFetchAlbumSearch";
import { useParams, useSearchParams } from "react-router";

const AlbumSearchView = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const query = searchParams.get("q") || "";

  const { isLoading, error, data: results = [] } = useFetchAlbumSearch(query!);

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

          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
