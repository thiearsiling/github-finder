import React from "react";
import { UserItem } from "./UserItem";
import spinner from "../layout/Spinner";

export const Users = ({ users }) => {
  // const [users, setUsers] = useState([
  //   {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/",
  //   },
  // ]);

  const gridColumns = users.length > 3 ? 3 : users.length;

  return (
    <div
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridColumnGap: "1rem",
      }}
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
