export {};
// ES6
let klucz = 123;
const cachez = {
  [klucz + "$"]: "costam",
};
// cache[ klucz ] = 'costam'
cachez[klucz + "$"];
// 'costam'


/// --- tS ---

type CacheItem = {
  name: string;
};

// Indexed Type 
type Cache = { [klucz: string]: CacheItem; };

const cache: Cache = {
  "123": { name: "playlist 123" },
  "345": { name: "playlist 345" },
};
cache["123"] = { name: "" };
cache["234"] = { name: "" };

