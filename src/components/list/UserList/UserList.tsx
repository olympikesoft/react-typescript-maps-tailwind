import React from "react";
import UserResponse from "../../../types/users/UserResponse";
import UserItem from "../../item/UserItem/UserItem";

type UserListProps = {
  rows: UserResponse[];
  onClick: (user: UserResponse) => void;
};

const UserList: React.FunctionComponent<UserListProps> = ({
  rows,
  onClick
}) => {
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto">
      <ul className="flex flex-col">
        {rows.map((e) => (
          <UserItem key={e.id} user={e} onClick={() => onClick(e)} />
        ))}
      </ul>
    </div>
  );
};
export default UserList;
