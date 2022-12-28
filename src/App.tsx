import UserList from "./components/list/UserList/UserList";
import UserGetUsers from "./hooks/useGetUsers/UserGetUsers";
import UserResponse from "./types/users/UserResponse";
import useFetch from "use-http";
export default function App() {
  const { get, response } = useFetch(process.env.REACT_APP_LOCAL_BASE_URL);

  const data: UserResponse[] = UserGetUsers(get, response);

  const onClick = (user: UserResponse) => {
    window.open(
      "https://www.google.com/maps?q=" +
        user.address.geo.lat +
        "," +
        user.address.geo.lng
    );
  };

  return (
    <div className="App pt-2">
      <UserList rows={data} onClick={onClick} />
    </div>
  );
}
