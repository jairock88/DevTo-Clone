import { useEffect, useState } from "react";

export function useUserLogged() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLogged(true);
    }
  }, []);

  return isUserLogged;
}
