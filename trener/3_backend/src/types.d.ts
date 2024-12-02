// declare module "process" {

export {};

declare global {  // only if inside module (import/export)
  namespace NodeJS {
    interface ProcessEnv {
      //   HOST: string | undefined
      /**
       * Addres server is listening on
       */
      HOST?: string;
      POST?: string;
    }
  }
}

// type A = {name:string}
// type A = {name2:string}

interface A {
  name: string;
} // Lib.ts
interface A {
  surname: string;
} // App.ts

const person: A = { name: "", surname: "" };
