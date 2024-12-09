export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[];
}

export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  // track_no: number;
}

export interface Episode {
  id: string;
  name: string;
  // public: boolean;
  duration_ms: number;
  episode_no: number;
}

function showInfo(res: Playlist | Track | Episode) {
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
