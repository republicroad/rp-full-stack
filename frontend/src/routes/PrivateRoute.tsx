 
import { ROLE } from "../utils/roles";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
 
const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: Array<ROLE>;
}) => {
  let location = useLocation();
  const { isAuthenticated, user, loading } = useSelector((state:any) => state.auth);
 
  if (loading) {
    return <p className="container">Checking auth..</p>;
  }
 
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;
 
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
 
  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />; // build your won access denied page (sth like 404)
  }
 
  return children;
};


import { useRouteError } from "react-router-dom";

export function AccessDenied() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, AccessDenied.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}