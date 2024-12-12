import { Route, Routes } from "react-router";
import { userLoginPath, userPath } from "../../app/paths.ts";
import LoginQuery from "./login/login-query.tsx";
import UserQuery from "./user-query.tsx";

const UserRoute = () => {
  return (
    <Routes>
      <Route path={userPath()} element={<UserQuery />} />
      <Route path={userLoginPath()} element={<LoginQuery />} />
    </Routes>
  );
};

export default UserRoute;
