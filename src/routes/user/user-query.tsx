import { useUsersLoader } from "./api/use-users-loader.hook.tsx";
import UserPage from "./user-page.tsx";

const UserQuery = () => {
  const { data: users, fetchStatus } = useUsersLoader();

  console.log({ fetchStatus });

  return <UserPage data={users} />;
};

export default UserQuery;
