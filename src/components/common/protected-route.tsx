import { Navigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return props.children;
};
export default ProtectedRoute;
