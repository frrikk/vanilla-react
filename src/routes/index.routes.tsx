import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DashboardRoute = lazy(() => import("./dashboard"));
const UserRoute = lazy(() => import("./user"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading Parent Routes</div>}>
      <ErrorBoundary fallback={<div>An error occurred</div>}>
        <DashboardRoute />
        <UserRoute />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Routes;
