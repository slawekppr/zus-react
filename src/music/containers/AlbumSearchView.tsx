import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import UserWidget from "../../common/context/UserWidget";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetchAlbumSearch } from "./useFetchAlbumSearch";
import { useParams, useSearchParams } from "react-router";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });

  const { isLoading, error, data: results = [] } = useFetchAlbumSearch(query);

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
