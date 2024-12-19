// Curried Function:

// const appendItem = (draft: Playlist, nextPlaylists: Playlist[]): Playlist[] => [

export const appendItem =
  <T,>(x: T) =>
  (xs: T[]): T[] =>
    [...xs, x];

export const appendItem2 : <T,>(x:T) => (xs:T[]) => T[] =
  x => xs => [...xs,x]
  
/**
 * replace item in array using matching 'id'
 * Immutable!
 * @param x item
 * @returns new array
 */
export const updateItem =
  <T extends { id: any }>(x: T) =>
  (xs: T[] = []): T[] =>
    xs.map((p) => (p.id === x.id ? x : p));
