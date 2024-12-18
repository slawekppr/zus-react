const client_id = "793ec472d90147518aab693219128707";
const redirect_uri = "http://localhost:5173/callback";
const scope = "user-read-private user-read-email";
const url = "https://accounts.spotify.com/authorize";

export const login = () => {
  const params = new URLSearchParams({
    response_type: "token",
    client_id,
    scope,
    redirect_uri,
    state: "",
    show_dialog:'true'
  });
  window.location.href = url + "?" + params;
};

let access_token: string | null = "";

export const getToken = () => access_token

export const checkLogin = () => {
  access_token = new URLSearchParams(window.location.hash.slice(1)).get(
    "access_token"
  );
  if (access_token) {
    sessionStorage.setItem("access_token", access_token);
    window.location.hash = "";
  } else {
    access_token = sessionStorage.getItem("access_token");
  }
  return !!access_token
};