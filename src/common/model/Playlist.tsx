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

/// --------

function isVerified(user: User): user is VerifiedUser {
  return user.isVerified === true;
}
function isAdmin(user: VerifiedUser): user is AdminUser {
  return user.isAdmin === true;
}

// User
if (isVerified(user)) {
  // VerifiedUser
  if (isAdmin(user)) {
    // AdminUser
    thisCanBeDoneByADminOnly(user);
  }
}

function thisCanBeDoneByADminOnly(user: AdminUser) {}
