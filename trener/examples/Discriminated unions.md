```ts
export interface Playlist {
  type: "playlist"; // Discriminator  ( intersected -> disjoint union )
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[];
}

export interface Track {
  type: "track";
  id: string;
  name: string;
  duration_ms: number;
  // track_no: number;
}

export interface Episode {
  // type: Modes3.Episode,
  type: "episode";
  id: string;
  name: string;
  // public: boolean;
  duration_ms: number;
  episode_no: number;
}
type Modes = Playlist | Track | Episode;
type Modes2 = "Playlist" | "Track" | "Episode";
enum Modes3 {
  Playlist,
  Track,
  Episode,
}

function showInfo2(res: Playlist | Track | Episode) {
  switch (res.type) {
    case "playlist":
      return `${res.name} - ${res.tracks?.length || " no "} tracks`;
    case "episode":
      return `${res.name} - ${res.episode_no} episode`;
    case "track":
      return `${res.name} - ${res.duration_ms / 1000}s`;
    default:
      res satisfies never;
      throw new Error("Unexpected res type");
  }
}

function showInfo(res: Modes) {
  if ("public" in res)
    return `${res.name} - ${res.tracks?.length || " no "} tracks`;

  if ("episode_no" in res) return `${res.name} - ${res.episode_no} episode`;

  if ("duration_ms" in res) return `${res.name} - ${res.duration_ms / 1000}s`;
}

function normalizeId(id: number | string /* Union */) {
  // return String(id) // Conversion
  // return id.toString(); // intersection
  // id.valueOf // Union - string | number

  if (typeof id === "number") {
    return id.toFixed(0);
  }
  if (typeof id === "string") {
    return id.toLowerCase();
  }

  id satisfies never; // never // TS
  throw new Error("Invalid ID " + id); // JS

  // return void() // undefined
}

```