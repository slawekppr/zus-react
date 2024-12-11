import { mockAlbums } from "../fixtures/mockAlbums";

export const fetchAlbumSearchResults = (query = "") => {
  console.log("Searching ", query);

  return Promise.resolve(mockAlbums);
};
