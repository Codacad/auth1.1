import { useState } from "react";
import AuthContext from "./AuthContext"
const AuthContextProvider = ({ children }) => {
  let [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;