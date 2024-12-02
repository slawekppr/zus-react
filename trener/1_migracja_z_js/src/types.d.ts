import jQuery from "jquery";

declare module "jquery" {
  export const placki = 123;

  export function addClass(): any;
}
