type Modes = "details" | "editor" | "creator";

type ModeThanString = string & {};
type ModesPlus = Modes | ModeThanString;

let mode: ModesPlus = "details";

type Header = "Authorization" | "Content-Type";
type ExtraHeaders = `X-${string}`;
type ExtendedHeaders = Header | ExtraHeaders;

// function setHeader(header: ExtendedHeaders | (string & {})) {}
function setHeader(header: ExtendedHeaders) {}

setHeader("X-Proxy");
setHeader("X-Banaba");
// setHeader("asd");
setHeader("Authorization");
// setHeader("Cookies");

// Template Literal Types
// const placki = `${123} + ${"asd" + "asd"}`;

type protocols = "http" | "https";
type domains = "zus.pl" | "zus.ad";

/**
 * Usage 1
 * @param url
 */
function buildUrl(url: `${protocols}://${domains}/`);
/**
 * Usage 2
 * @param url
 */
function buildUrl(url: `${protocols}://${domains}/${string}`, param: any);
function buildUrl(url: string, param?: any) {
  // if(param?)
}

buildUrl("https://zus.pl/");
buildUrl("https://zus.pl/123", 123);
