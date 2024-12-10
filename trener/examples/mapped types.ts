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

type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {};
  type: string;
};

// Lookup
type AlbumId = Album["id"];
type AlbumImage = Album["images"][number];

type Album2 = {
  id: Album["id"];
  name: Album["name"];
  image: Album["images"];
};

type keys = "id" | "name" | "images";

// Map Album keys to Album3
type Album3 = {
    // ... keys ...
}