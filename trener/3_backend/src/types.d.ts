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

declare global {
  namespace Express {
    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
    interface Request {
      user?: { name: string };
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
