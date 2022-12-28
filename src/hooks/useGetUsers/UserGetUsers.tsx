import { useEffect, useState } from 'react';
// @ts-ignore: Unreachable code error
import { getUserData } from '../../api/api';

const UserGetUsers = (get: unknown, response: unknown) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const userData = async () => {
        const dataResponse = await getUserData(get, response);
        if (dataResponse) {
          setData(dataResponse);
        }
      };
      userData();
    } catch (error) {}
  }, [get, response]);
  return data;
};

export default UserGetUsers;
