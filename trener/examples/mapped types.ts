
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
