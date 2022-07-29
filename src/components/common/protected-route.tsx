import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props: { to?: string; children: ReactElement }) => {
  const to = props.to || "/login";
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to={to} replace={true} />;
  }

  return props.children;
};
export default ProtectedRoute;
