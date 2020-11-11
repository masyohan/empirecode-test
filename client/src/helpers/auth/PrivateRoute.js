import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { auth, setAuth } = useAuth();
  if (auth.isAuthenticated == undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
