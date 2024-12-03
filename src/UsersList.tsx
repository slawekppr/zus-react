import { PersonProfile } from "./PersonProfile";
import type { User } from "./User";

export const UsersList = ({ users }: { users: User[] }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <PersonProfile user={user} />
      </li>
    ))}
  </ul>
);
