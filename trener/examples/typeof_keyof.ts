export {};

type User = { role: "user" };
type Moderator = { role: "moderator"; isModerator: true };
type Administrator = { role: "administrator"; isAdmin: true };

type Role1 = "user" | "moderator" | "administrator";
type UserRole = { role: Role1 };

type Role2 = User["role"] | Moderator["role"] | Administrator["role"];

type Users = User | Moderator | Administrator;
type Role3 = Users["role"];

type Role = (User | Moderator | Administrator)["role"];

const UserRoles = {
  USER: "user",
  ADMIN: "admin",
  MODERATOR: "moderator",
} as const;

//'UserRoles' refers to a value, but is being used as a type here.
// Did you mean 'typeof UserRoles'?

// Typeof
typeof "banana" === "string"; // JS

type Roles4 = typeof UserRoles; // TS

type Roles5 = Roles4["ADMIN"] | Roles4["MODERATOR"] | Roles4["USER"];

type Roles5_5 = Roles4["ADMIN" | "MODERATOR" | "USER"];

// Keyof
type Roles6 = keyof Roles4;

type Roles7 = keyof typeof UserRoles;

type Roles8 = Roles4[keyof typeof UserRoles];

// typeof keyof lookup[]
type Roles9 = (typeof UserRoles)[keyof typeof UserRoles];

const role: Roles9 = "admin";

// typeof and classes

class Placek {
  sos = "bananowy";
}
class SuperPlacek extends Placek{}

const jedenPlacek = new Placek(); // Placek

type InstanceType = typeof jedenPlacek; // Placek
type ConstructorType = typeof Placek; // Placek
type ConstructorType2 = { new (): Placek }; // Placek

function podajSniadanie(co: InstanceType) {}
podajSniadanie(jedenPlacek);

function zrobSniadanie(coZrobic: ConstructorType) {}
zrobSniadanie(Placek);
zrobSniadanie(SuperPlacek);

function zrobSniadanie2(coZrobic: { new (): Placek }) {}
zrobSniadanie2(Placek);
zrobSniadanie2(SuperPlacek);
