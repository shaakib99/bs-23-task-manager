import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { localStorageKeys } from "../../common/mock/storage-keys.mock";

const ProtectedRoute = (props: { to?: string; children: ReactElement }) => {
  const to = props.to || "/login";
  const user = localStorage.getItem(localStorageKeys.USER);

  if (!user) {
    return <Navigate to={to} replace />;
  }
  return props.children;
};
export default ProtectedRoute;
