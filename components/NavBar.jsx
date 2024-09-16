import { useEffect, useState } from "react";
import { getUser } from "@/utils/api";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      // Obtener el ID del usuario desde el localStorage
      const userId = localStorage.getItem("userId");

      if (userId) {
        const userData = await getUser(userId);
        console.log("User data in Navbar:", userData); // Verifica los datos en la consola
        setUser(userData); // Guardar todos los datos del usuario en el estado
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    // Eliminar el token y el userId de localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    // Actualizar el estado para que el usuario sea null
    setUser(null);

    // Opcional: redirigir al usuario a la página de inicio de sesión o inicio
    window.location.href = "/enter";
  };

  return (
    <nav className="bg-white max-w-[full] border-b border-gray-300">
      <div className="mx-6">
        <div className="max-w-[1350px] mx-auto h-[56px] flex items-center justify-between bg-white">
          <div className="flex items-center flex-1">
            <a href="/" className="mr-4">
              <img
                className="h-10"
                src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo"
              />
            </a>
            <div className="relative flex-1 max-w-[800px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <search className="h-5 w-5 text-gray-800" />
              </div>
              <input
                className="block w-10/12 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm hover:border-gray-400"
                type="search"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center px-4">
            {user ? (
              <>
                <button className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-md font-medium hover:underline mr-3">
                  Create Post
                </button>
                <button className="text-gray-700 hover:bg-blue-200/45 px-3 py-2 rounded-md text-md font-medium hover:underline mr-3">
                  <i className="fa fa-bell" />
                </button>
                <img
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  src={user.profilePic}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full relative cursor-pointer"
                />
                {isDropdownOpen && (
                  <div className="bg-white absolute mt-40 p-4 shadow-lg rounded-md border border-gray-300">
                    <h1 className="text-black font-semibold">{user.name}</h1>{" "}
                    {/* Renderiza el nombre del usuario */}
                    <button
                      className="mt-2 text-red-500 hover:text-red-700"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>{" "}
                    {/* Ejemplo de opción */}
                  </div>
                )}
              </>
            ) : (
              <>
                <a
                  href="/enter"
                  className="text-gray-700 hover:bg-blue-200/45 px-3 py-2 rounded-md text-md font-medium hover:underline mr-3"
                >
                  Log in
                </a>
                <a
                  href="/usersignup"
                  className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline h-10 w-[145px] px-4 py-2 rounded-md text-md font-medium"
                >
                  Create account
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
