// import DevCommunityUsers from "@/components/devcommunityform";

// // funcion para saber si hay un usuario logeado tomando el token de local storage
// function isUserLoggedIn() {
//   return localStorage.getItem("token") !== null;
// }

// export default function LoginCard() {
//   // si el usuario esta logeado no se muestra el login card
//   if (isUserLoggedIn()) {
//     return null;
//   }

//   return (
//     <div
//       id="login-card"
//       className=" bg-white shadow-sm text-start border border-gray-300 rounded-md md:w-auto"
//     >
//       <div className="p-6">
//         <DevCommunityUsers className="" />

//         <div className="flex flex-col gap-2 mt-4">
//           <button
//             type="button"
//             className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
//           >
//             Create account
//           </button>
//           <a href="VIEWS/loginPage.html" className="w-full">
//             <button
//               id="loginhome"
//               type="button"
//               className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
//             >
//               Log in
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import DevCommunityUsers from "@/components/devcommunityform";
import { useRouter } from "next/router";

export default function LoginCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = () => {
    router.push("/enter");
  };

  useEffect(() => {
    // Verifica si hay un token en localStorage cuando el componente se monta
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(token !== null);
    };

    checkLoginStatus();
  }, []);

  // Si el usuario está logueado, no se muestra el componente
  if (isLoggedIn) {
    return null;
  }

  return (
    <div
      id="login-card"
      className="bg-white shadow-sm text-start border border-gray-300 rounded-md md:w-auto"
    >
      <div className="p-6">
        <DevCommunityUsers className="" />

        <div className="flex flex-col gap-2 mt-4">
          <button
            type="button"
            className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
            onClick={handleSignUpClick}
          >
            Create account
          </button>

          <button
            id="loginhome"
            type="button"
            className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
            onClick={handleLoginClick}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
