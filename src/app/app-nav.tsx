import { Link, NavLink } from "react-router";
import { cn } from "../utils/cn.ts";
import { userLoginPath, userPath } from "./paths.ts";

const AppNav = () => {
  return (
    <nav className={cn("flex justify-between items-center h-full")}>
      <Link to="/">Home</Link>
      <ul className={cn("flex gap-2")}>
        <li>
          <NavLink to={userLoginPath()}>Login</NavLink>
        </li>
        <li>
          <NavLink to={userPath()}>User</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
