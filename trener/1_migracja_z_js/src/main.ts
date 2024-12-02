/// <reference path="./types.d.ts" />
import { sub, div, mult } from "./lib.js";
import jQuery from "jquery";

// jQuery.placki;
// document.getElementById('title')!.textContent = 'Hello TS'

// const title: HTMLElement | null = document.getElementById("title"); // Union Type
const title = document.getElementById("title"); // Union Type

// Type Narrowing
if (title) {
  title.textContent = "Hello TS";
}
