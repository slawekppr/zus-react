type Modes = "details" | "editor" | "creator";

type ModeThanString = string & {};
type ModesPlus = Modes | ModeThanString;

let mode: ModesPlus = "details";

type Header = "Authorization" | "Content-Type";

function setHeader(header: Header | (string & {})) {}

setHeader("Authorization");
setHeader("Cookies");
