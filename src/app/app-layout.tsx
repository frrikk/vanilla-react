import { Outlet } from "react-router";
import Routes from "../routes/index.routes.tsx";
import { cn } from "../utils/cn.ts";
import AppNav from "./app-nav.tsx";
import AppSidebar from "./app-sidebar.tsx";

const AppLayout = () => {
  return (
    <div className={cn("h-dvh flex flex-col overflow-hidden bg-neutral-100")}>
      <header
        className={cn(
          "min-h-16 sticky top-0 z-10 border-b border-neutral-200 p-4",
        )}
      >
        <AppNav />
      </header>
      <div className={cn("flex h-dvh")}>
        <aside
          className={cn(
            "w-64 sticky p-4 top-0 z-10 border-r border-neutral-200",
          )}
        >
          <AppSidebar />
        </aside>
        <main className={cn("flex-1 overflow-y-auto p-4")}>
          <Routes />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
