import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { localStorageKeys } from "../../common/mock/storage-keys.mock";

const RedirectRoute = (props: { to?: string; children: ReactElement }) => {
  const to = props.to || "/";

  const user = localStorage.getItem(localStorageKeys.USER);

  if (user) {
    return <Navigate to={to} replace={true} />;
  }

  return props.children;
};
export default RedirectRoute;
