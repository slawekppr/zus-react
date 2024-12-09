export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}

type User = {
  name: string;
  isVerified: boolean;
  isAdmin: boolean;
};

type VerifiedUser = User & { isVerified: true };
type AdminUser = VerifiedUser & { isAdmin: true };

const user: User = { name: "Admin", isAdmin: true, isVerified: true };

function isAdmin(user: User): user is AdminUser {
  return user.isAdmin === true;
}

if (isAdmin(user)) {
  thisCanBeDoneByADminOnly(user);
}

function thisCanBeDoneByADminOnly(user: AdminUser) {}
