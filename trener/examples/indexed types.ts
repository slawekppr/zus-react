import React from "react";

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
type Cache = { [klucz: string]: CacheItem };
type SafeCache = { [klucz: string]: CacheItem | undefined };

type SafeCache2 = { [klucz in string]?: CacheItem };

const cache: SafeCache = {
  "123": { name: "playlist 123" },
  "345": { name: "playlist 345" },
};
cache["123"] = { name: "" };
cache["234"] = { name: "" };
// cache["does not exit!"].name.toUpperCase();
