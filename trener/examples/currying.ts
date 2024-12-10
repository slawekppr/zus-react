// Currying  - Haskel Curry

const request = (host: string) => (resource: any) => (param: any) => () =>
  `${host}/${resource}/${param}`;

// request ('http://placki.com') ('placki') (123) ()

const api = request("http://placki.com");
const placki = api("placki");
/// ---
const placek123 = placki(123);
/// ----

placek123(); // engage!
placek123(); // engage!
