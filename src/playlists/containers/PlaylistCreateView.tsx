import { InputText } from "primereact/inputtext";
import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";
import { mockAlbums } from "../../common/fixtures/mockAlbums";
import { mockPlaylists } from "../../common/fixtures/mockPlaylists";
import { Button } from "primereact/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Playlist } from "../../common/model/Playlist";
import AddToPlaylistDialog from "../../music/containers/AddToPlaylistDialog";

const playlistSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Value too short")
    .regex(/[A-Z].*/, "Must start with Capital Letter"),
  public: z.boolean(),
  description: z.string().optional(),
});

type Playlsit2 = z.infer<typeof playlistSchema>;
// const result = playlistSchema.parse(mockPlaylists[0]); // Playlist | Exception!

const PlaylistCreateView = () => {
  const playlist = mockPlaylists[0];

  const {
    formState: { errors, isSubmitting, isValidating },
    control,
    getValues,
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: playlist,
    // mode: "onChange",
    // reValidateMode: "onChange",
    resolver: zodResolver(playlistSchema),
  });

  const isPublic = watch("public");

  return (
    <form
      onSubmit={handleSubmit(
        async (data) => {
          debugger;
        },
        async (error) => {
          debugger;
        }
      )}
    >
      <div className="grid gap-5">
        <div>
          {isSubmitting && "wysylam"}
          {isValidating && "sprawdzam"}
        </div>

        <CustomInputCounter control={control} label="Name" name="name" />

        {/* <div className="grid grid-cols-2">
          <label>Name</label>
          <div>
            <InputText {...register("name")} />
            {errors["name"] && (
              <p className="text-red-500">{errors["name"]?.message}</p>
            )}
          </div>
        </div> */}

        <div className="grid grid-cols-2">
          <label>Public</label>
          <input type="checkbox" {...register("public")} />
        </div>

        <div className="grid grid-cols-2">
          <label>Description</label>
          <textarea {...register("description", { disabled: !!isPublic })} />
        </div>

        <div className="flex gap-5">
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            severity="warning"
            onClick={() => reset(playlist)}
          >
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PlaylistCreateView;

const CustomInputCounter = <T extends FieldValues>({
  control,
  label,
  name,
}: {
  label: string;
  name: Path<T>;
  control: Control<T, any>;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="grid grid-cols-2">
          <label>{label}</label>
          <div>
            <InputText {...field} />
            {error && <p className="text-red-500 my-2">{error?.message}</p>}
            {!error && <>{field.value.length} / 100</>}
          </div>
        </div>
      )}
    />
  );
};
