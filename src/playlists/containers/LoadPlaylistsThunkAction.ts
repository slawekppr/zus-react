import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import { fetchMyPlaylists } from "../../common/services/MusicAPI";
import { AppDispatch } from "../../store";
import { playlistsSlice } from "../../store/playlists";

export const LoadPlaylistsThunkAction = () => (dispatch: AppDispatch) => {
  fetchMyPlaylists()
    .then((data) => {
      dispatch(playlistsSlice.actions.LoadPlaylists({ data: mockPlaylists }));
    })
    .catch((error) => dispatch(playlistsSlice.actions.LoadPlaylists({ error: error.message }))
    );
};
