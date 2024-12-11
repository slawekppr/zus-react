import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Button } from "primereact/button";
import PlaylistView from "./playlists/containers/PlaylistView";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { checkLogin, login } from "./common/services/Auth";
import NavBar from "./common/components/NavBar";
import MainLayout from "./common/components/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  useMemo(() => {
    checkLogin();
  }, []);

  return (
    <>
      <MainLayout>
        <AlbumSearchView />
      </MainLayout>
    </>
  );
}

export default App;
