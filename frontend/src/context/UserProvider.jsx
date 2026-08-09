import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getUserLogged } from "../utils/network-data";

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const refreshUser = async () => {
    const dataUser = await getUserLogged();
    if (dataUser.error !== true) {
      setUser(dataUser.data);
    } else {
      setUser(null);
    }
  };
  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, refreshUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
