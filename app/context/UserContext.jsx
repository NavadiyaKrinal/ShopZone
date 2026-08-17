"use client";

import { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = {
    name: "Krinal",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}