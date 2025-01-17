import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { ProgressSpinner } from "primereact/progressspinner";
import { useSearchParams } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { Button } from "primereact/button";

const AlbumSearchView = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const query = searchParams.get("q") || "";

  const {
    data: data,
    isLoading,
    isFetching,
    fetchNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["albums/search", query /* page, limit, sort */],
    queryFn: ({ signal, pageParam }) =>
      fetchAlbumSearchResults(query, pageParam, { signal }),
    enabled: !!query,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.albums.offset + 20;
    },
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

          {data?.pages.map((page) => {
            return <ResultsGrid results={page.albums.items} />;
          })}
          <Button onClick={() => fetchNextPage()}>NExt page</Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;

export const Component = AlbumSearchView;
