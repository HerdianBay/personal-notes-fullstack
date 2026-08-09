import { Navigate, Outlet } from "react-router";
import { getAccessToken } from "../utils/network-data";

export default function ProtectedRoute() {
  const token = getAccessToken();

  if (token === null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
