import { InputText } from "primereact/inputtext";
import React from "react";
import { useForm } from "react-hook-form";
import { mockAlbums } from "../../common/fixtures/mockAlbums";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";

type Props = {};

const PlaylistCreateView = (props: Props) => {
  const playlist = mockPlaylists[0];

  const { formState, control, getValues, register, handleSubmit, watch } =
    useForm({
      defaultValues: playlist,
    });

  // const name = watch('name') // state -> rerender

  // const { name, onBlur, onChange, ref, disabled } = register("name");
  // <input type="text" value={} onChange={} onBlur={} ref={} />

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid grid-cols-2">
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="grid grid-cols-2">
          <label>Public</label>
          <input type="checkbox" {...register("public")} />
        </div>
        <div className="grid grid-cols-2">
          <label>Description</label>
          <textarea {...register("description")} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default PlaylistCreateView;
