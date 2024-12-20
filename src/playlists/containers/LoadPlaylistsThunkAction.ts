import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import { fetchMyPlaylists } from "../../common/services/MusicAPI";
import { AppDispatch } from "../../store";

export const LoadPlaylistsThunkAction = () => (dispatch: AppDispatch) => {
  fetchMyPlaylists()
    .then((data) => {
      dispatch(actions.LoadPlaylists({ data: mockPlaylists }));
    })
    .catch((error) => dispatch(actions.LoadPlaylists({ error: error.message }))
    );
};
