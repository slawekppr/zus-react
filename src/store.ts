import {
  configureStore,
  Middleware,
  MiddlewareAPI,
  Tuple,
} from "@reduxjs/toolkit";
import { counterSlice } from "./store/counter";
import { playlistsSlice } from "./store/playlists";

const logger: Middleware =
  (api: MiddlewareAPI) =>
  (next: (action: unknown) => unknown) =>
  (action: unknown) => {
    console.log("before ", action);
    const state = next(action);
    console.log("after", action);
    return state;
  };

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [playlistsSlice.name]: playlistsSlice.reducer,
  },
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware(); //.concat([logger]);
  },
});

(window as any).store = store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
