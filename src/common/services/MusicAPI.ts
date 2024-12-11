import { mockAlbums } from "../fixtures/mockAlbums";

export const fetchAlbumSearchResults = (query = "") => {
  return Promise.resolve(mockAlbums);
};
