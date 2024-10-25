import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fakeNetResult } from "../utils/fakeTools";

const AuthContext = createContext({});

const AuthProvider = ({ children }:any) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));

  // Function to set the authentication token
  const setToken = (newToken:any) => {
    setToken_(newToken);
  };

  const handleLogin = async (email:string, password:string) => {
    // login 需要在 hook 使用时导出，需要对代码进行重构.
    // https://stackoverflow.com/questions/74296504/invoke-hook-from-react-router-data-router-action
    // https://stackoverflow.com/questions/76766824/passing-a-function-to-a-react-router-action-in-typescript
    // const jwt = await loginApi(email, password);
    await fakeNetResult("test_fakeNetResult");
    console.log(`login: ${email}  ${password}`);
    const jwt = "jwt_token";
    setToken(jwt);
    // return success/fail for login action handler
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // https://stackoverflow.com/questions/41376538/what-is-the-difference-between-localforage-and-localstorage
      // localForage vs localStorage  ==> sync vs async
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      handleLogin: handleLogin,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
