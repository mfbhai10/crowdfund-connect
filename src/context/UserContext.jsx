import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [coins, setCoins] = useState(() => {
    const stored = localStorage.getItem("coins");
    return stored ? parseInt(stored) : 0;
  });

  const addCoins = (amount) => {
    setCoins((prev) => prev + amount);
  };

  const deductCoins = (amount) => {
    setCoins((prev) => Math.max(0, prev - amount));
  };

  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);

  return (
    <UserContext.Provider value={{ coins, addCoins, deductCoins }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
