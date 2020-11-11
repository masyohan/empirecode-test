import React, { useState, useEffect } from "react";
import Api from "../../api/fetch";
import { setToken, clearToken } from "./token";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    Api.validate((res) => {
      if (res.success) {
        let user = res.data;
        user.isAuthenticated = true;
        setAuth(user);
      } else {
        setAuth({
          isAuthenticated: false,
        });
      }
    });
  }, [auth.isAuthenticated]);
  return (
    <AuthContext.Provider value={{ auth, setAuth }} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
}

function authenticate(user, callback) {
  Api.login(user, (error, result) => {
    if (error) {
      callback(error, null);
    } else if (result.success) {
      const { token } = result.data;
      setToken(token);
      callback(null, result.data);
    }
  });
}

function logout(callback) {
  clearToken();
  callback();
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext, authenticate, logout };
