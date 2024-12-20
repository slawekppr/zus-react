import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { PlaylistDetailsLoader } from "../../main";
import { Route, Routes } from "react-router";

const PlaylistView = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <PlaylistList createNew />
        </div>

        <div className="grid gap-5">
          <Routes>
            <Route path="create" element={<PlaylistEditor />} />
            <Route
              path=":playlistId"
              loader={PlaylistDetailsLoader}
              element={<PlaylistDetails />}
            />
            <Route path=":playlistId/edit" element={<PlaylistEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;

export const Component = PlaylistView;
