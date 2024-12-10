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

// type AllowedHeaders = "Accept" | "Authorization" | string & {};
type AllowedHeaders = "Accept" | "Authorization" | `X-${string}`;

// Mapped Type
type RequestConfig = {
  headers: {
    [headerName in AllowedHeaders]: string;
  };
};
const req: RequestConfig = {
  headers: {
    Accept: "",
    Authorization: "",
  },
};
req.headers["Accept"] = "banana";
req.headers["X-Proxy"] = "banana";
// req.headers["Proxy"] = "banana"; // errror

type events = "click" | "change"; //| 'blur'
type domEvents = `on${events}`;
type reactEvents = `on${Capitalize<events>}`;

type EventTypes = {
  onClick: React.MouseEvent;
  onChange: React.ChangeEvent;
};

// Mapped Type With lookup   ( for e in ... dict[e]  )
type componentEventProps = {
  [e in reactEvents]: React.EventHandler<EventTypes[e]>;
};
