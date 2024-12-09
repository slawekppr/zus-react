export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
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
