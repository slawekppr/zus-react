import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Button } from "primereact/button";
import PlaylistView from "./playlists/containers/PlaylistView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { checkLogin, login } from "./common/services/Auth";

function App() {
  const [count, setCount] = useState(0);

  useMemo(() => {
    checkLogin();
  }, []);

  return (
    <>
      {/* .container.my-5>h1.text-5xl.bg-primary-500.text-white.p-5{Witaj w ZUS} */}
      <div className="container my-5 grid gap-5">
        <div className="bg-primary-500">
          <Button className="float-end m-5" onClick={login}>
            Login
          </Button>
          <h1 className="text-5xl  text-white p-5">Witaj w ZUS</h1>
        </div>

        {/* <PlaylistView/> */}
        <AlbumSearchView />
      </div>
    </>
  );
}

export default App;
