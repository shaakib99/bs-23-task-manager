import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const RedirectRoute = (props: { to?: string; children: ReactElement }) => {
  const to = props.to || "/dashboard";
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to={to} replace={true} />;
  }

  return props.children;
};
export default RedirectRoute;
