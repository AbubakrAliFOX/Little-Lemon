import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader";

export default function Layout({ children }) {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
