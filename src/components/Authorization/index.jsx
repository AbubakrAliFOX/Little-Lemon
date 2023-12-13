import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RequireAuth = () => {
  const { auth } = useAuth();
  console.log('Authhh', auth);
  const location = useLocation();
  return auth?.token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location, toastMsg: "You must log in first!" }}
      replace
    />
  );
};

export const NotRequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.token ? (
    <Navigate
      to="/profile"
      state={{ from: location, toastMsg: "You are logged in!" }}
      replace
    />
  ) : (
    <Outlet />
  );
};
