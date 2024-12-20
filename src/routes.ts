"/";
"analytics";
"playlists";
"create";
":playlistId";
":playlistId";
"music";
"search";
"albums";
"callback";

// https://dev.to/bytimo/useful-types-extract-route-params-with-typescript-5fhn

"/playlists/show/:playlistId";

type InfeParam<T> = T extends `/playlists/show/:${infer P}`? P : T
type SlicePath<T> = T extends `/${infer P1}/${infer P2}`? [P1,P2] : T
type Segments = SlicePath<'/playlists/show/:playlistId'>
type param = InfeParam<"/playlists/show/:playlistId">

type playlistRoute = `playlists`;
type playlistDetailsRoute = `${playlistRoute}/show/${string}`;
type playlistEditorRoute = `${playlistRoute}/edit/${string}`;
type playlistCreatorRoute = `${playlistRoute}/create`;

type Routes =
  | playlistRoute
  | playlistDetailsRoute
  | playlistEditorRoute
  | playlistCreatorRoute;

const route: Routes = "playlists/show/123";


