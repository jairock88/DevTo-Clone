import { useState, useEffect } from "react";
import { getUserCount } from "@/utils/api";

export default function DevCommunityUsers() {
  // Estado para almacenar el número de usuarios
  const [userCount, setUserCount] = useState(null);

  // useEffect para obtener el conteo de usuarios cuando el componente se monta
  useEffect(() => {
    // Función para obtener el conteo de usuarios
    const fetchUserCount = async () => {
      const count = await getUserCount();
      setUserCount(count);
    };

    fetchUserCount();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h3 className="font-black text-3xl text-black mt-3">
        Join the DEV Community
      </h3>
      <p className="text-gray-600 mt-2 text-sm">
        DEV Community is a community of{" "}
        {userCount ? userCount.toLocaleString() : "loading..."} amazing
        developers
      </p>
    </div>
  );
}
