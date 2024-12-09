export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}

// ADT - Abstract Data Types

type Idle = { isLoading: false };
type Progress = { isLoading: true };

type Success<T = unknown> = { data: T; error: never };
type Failed<E = unknown> = { data: never; error: E };

type Loaded<T, E> = Success<T> | Failed<E>;

type RequestStatus<T, E> = Progress | Loaded<T, E> | Idle;
