import React from "react";
import UserResponse from "../../../types/users/UserResponse";

type UserItemProps = {
  user: UserResponse;
  onClick: (user: UserResponse) => void;
};

const UserItem: React.FunctionComponent<UserItemProps> = ({
  user,
  onClick
}) => {
  const image = `https://randomuser.me/api/portraits/thumb/men/${user.id}.jpg`;
  return (
    <li
      className="flex flex-row mb-2 border-gray-400"
      onClick={() => onClick(user)}
    >
      <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
          <a href="/" className="relative block">
            <img
              alt="profil"
              src={image}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">
            {user.name} - {user.username}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-200">
            {user.company.name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-200">
            {user.address.suite}, {user.address.street}, {user.address.zipcode},{" "}
            {user.address.city}
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
