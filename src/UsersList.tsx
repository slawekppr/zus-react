import { PersonProfile } from "./PersonProfile";
import type { User } from "./User";

export const UsersList = ({ users }: { users: User[] }) => {
  
  
  console.log('render UsersList');
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ margin: "2rem" }}>
          <PersonProfile user={user} />
        </li>
      ))}
    </ul>
  );
};
