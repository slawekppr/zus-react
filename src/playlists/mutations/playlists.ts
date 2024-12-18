import { useMutation } from "@tanstack/react-query";
import { Playlist } from "../../common/model/Playlist";
import { MusicAPI } from "../../common/services/MusicAPI";
import { queryClient } from "../../main";

export const playlistUpdate = useMutation<Playlist, Error, Playlist>({
  mutationFn({ id, ...data }) {
    return MusicAPI.put(`playlists/${id}`, {
      json: data,
    })
      .json()
      .then(() => ({ id, ...data }));
  },
  onSuccess(data) {
    // queryClient.invalidateQueries({ queryKey: ["playlists"] });
    queryClient.invalidateQueries({ queryKey: ["playlists", "my"] });
    queryClient.invalidateQueries({ queryKey: ["playlists", data.id] });
  },
});
