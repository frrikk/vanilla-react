import { Suspense } from "react";

const DashboardQuery = () => {
  return <Suspense fallback={<div>Loading</div>}>Dashboard Query</Suspense>;
};

export { DashboardQuery };
