import { useMutation } from "@tanstack/react-query";
import { Playlist } from "../../common/model/Playlist";
import { MusicAPI } from "../../common/services/MusicAPI";
import { queryClient } from "../../main";
import { updateItem } from "../containers/utils";

export const usePlaylistUpdate = () => {
  const playlistsKey = ["playlists", "my"];

  return useMutation<
    Playlist,
    Error,
    Playlist,
    {
      previousState: Playlist[];
    }
  >({
    mutationFn({ id, ...data }) {
      return MusicAPI.put(`playlists/${id}`, {
        json: data,
      })
        .json()
        .then(() => ({ id, ...data }));
    },
    onMutate(data) {
      // Save Current State
      const previousState = queryClient.getQueryData(
        playlistsKey
      ) as Playlist[];

      // Optimistic Update = local:
      queryClient.setQueryData<Playlist[]>(playlistsKey, updateItem(data));
      queryClient.setQueryData<Playlist>(["playlists", data.id], data);

      // Context:
      return { previousState };
    },
    onSettled(data, error, variables, context) {
      //   queryClient.invalidateQueries({ queryKey: ["playlists", "my"] });
      //   queryClient.invalidateQueries({ queryKey: ["playlists", data.id] });
    },
    onError(error, variables, context) {
      // Compensating Transaction (Revert)
      queryClient.setQueryData<Playlist[]>(
        playlistsKey,
        context?.previousState || []
      );
    },
  });
};
