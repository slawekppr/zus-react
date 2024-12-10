export {};

type User = { role: "user" };
type Moderator = { role: "moderator", isModerator:true };
type Administrator = { role: "administrator", isAdmin:true };

type Role1 = "user" | "moderator" | "administrator";
type UserRole = { role: Role1 };

type Role2 = User["role"] | Moderator["role"] | Administrator["role"];

type Users = User | Moderator | Administrator
type Role3 = Users['role']

type Role = (User | Moderator | Administrator)['role']