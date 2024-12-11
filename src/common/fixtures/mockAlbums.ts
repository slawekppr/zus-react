import { Album } from "../model/Album";

// faker.js
// casual.js

export const mockAlbums: Album[] = [
  {
    id: "1",
    name: "Abbey Road",
    images: [
      { url: "https://placecats.com/millie/300/300", width: 300, height: 300 },
    ],
  },
  {
    id: "2",
    name: "The Dark Side of the Moon",
    images: [
      { url: "https://placecats.com/neo_banana/300/300", width: 300, height: 300 },
    ],
  },
  {
    id: "3",
    name: "Thriller",
    images: [
      { url: "https://placecats.com/neo/300/300", width: 400, height: 300 },
    ],
  },
  {
    id: "4",
    name: "Back in Black",
    images: [
      { url: "https://placecats.com/bella/300/300", width: 300, height: 300 },
    ],
  },
];
