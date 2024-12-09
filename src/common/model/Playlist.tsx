export interface Playlist {
  type: "playlist"; // Discriminator  ( intersected -> disjoint union )
  id: string;
  name: string;
  public: boolean;
  description: string;
}
