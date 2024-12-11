import { mockAlbums } from "../fixtures/mockAlbums";
import { getToken } from "./Auth";

// export const fetchAlbumSearchResults = (query = "") => {
//   console.log("Searching ", query);

//   return Promise.resolve(mockAlbums);
// };

export const fetchAlbumSearchResults = (query = "") => {
  fetch(
    "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        type: "album",
        q: query,
      }),
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
    .then((r) => r.json())
    .then(console.log);

  return Promise.resolve(mockAlbums);
};
