import { Route, Routes } from "react-router";
import { DashboardQuery } from "./dashboard-query.tsx";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route element={<DashboardQuery />} path="/" />
    </Routes>
  );
};

export default DashboardRoute;
