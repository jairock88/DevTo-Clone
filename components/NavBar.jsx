import { useEffect, useState, useRef } from "react";
import { getUser } from "@/utils/api";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleCreatePostClick = () => {
    router.push("/createpost");
  };

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const homeClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        const userData = await getUser(userId);
        console.log("User data in Navbar:", userData);
        setUser(userData);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Cerrar el dropdown si usuario da clic afuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/enter";
  };

  return (
    <div>
      <nav className="bg-white fixed top-0 left-0 right-0 border-b border-gray-300 z-50">
        <div className="mx-6">
          <div className="max-w-[1350px] mx-auto h-[56px] flex items-center justify-between bg-white">
            <div className="flex items-center flex-1">
              <div className="mr-4">
                <Image
                  onClick={homeClick}
                  height={40}
                  width={40}
                  className="h-10 hover:cursor-pointer"
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                  alt="Logo"
                />
              </div>
              <div className="relative flex-1 max-w-[800px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <search className="h-5 w-5 text-gray-800" />
                </div>
                <input
                  className="w-10/12 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm hover:border-gray-400 hidden sm:block"
                  type="search"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex items-center px-4">
              {user ? (
                <>
                  <button
                    onClick={handleCreatePostClick}
                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-md font-medium hover:underline mr-3 hidden sm:block"
                  >
                    Create Post
                  </button>
                  <button className="text-gray-700 hover:bg-blue-200/45 px-3 py-2 rounded-md text-md font-medium hover:underline mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="aogwm5u9o710d43mx0tef89o2noubg16"
                    >
                      <title id="aogwm5u9o710d43mx0tef89o2noubg16">
                        Notifications
                      </title>
                      <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                    </svg>
                  </button>
                  <img
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    src={user.profilePic}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full relative cursor-pointer hover:border-spacing-1 hover:border-2 hover:border-gray-300/70 object-cover"
                  />
                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="bg-white absolute mt-80 shadow-lg rounded-md border border-gray-300 p-1"
                    >
                      <div className="p-1">
                        <button className="rounded-md text-gray-700 items-center py-1 hover:text-blue-800 hover:bg-blue-600/10 hover:underline">
                          <h1 className="font-semibold px-4 mr-10">
                            {user.name}
                          </h1>

                          <h1 className="text-sm font-thin px-4 py-1 flex">
                            @{user.username}
                          </h1>
                        </button>
                        <hr className="flex-grow border-gray-300 m-1" />

                        <Link href="/">
                          <p
                            onClick={handleCreatePostClick}
                            className="flex w-full mt-0 rounded-md text-gray-700 py-3 px-4 items-center hover:text-blue-800 hover:bg-blue-600/10 hover:underline"
                          >
                            Dashboard
                          </p>
                        </Link>

                        <p
                          onClick={handleCreatePostClick}
                          className="flex w-full mt-0 rounded-md text-gray-700 py-3 px-4 items-center hover:text-blue-800 hover:bg-blue-600/10 hover:underline hover:font-semibold cursor-pointer"
                        >
                          Create Post
                        </p>

                        <Link href="/">
                          <p className="flex w-full mt-0 rounded-md text-gray-700 py-3 px-4 items-center hover:text-blue-800 hover:bg-blue-600/10 hover:underline">
                            Reading list
                          </p>
                        </Link>
                        <hr className="flex-grow border-gray-300 py-1 m-1" />
                        <button
                          className="flex w-full rounded-md text-gray-700 py-2 px-4 items-center hover:text-blue-800 hover:bg-blue-600/10 hover:underline"
                          onClick={handleLogout}
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/enter"
                    className="text-gray-700 hover:bg-blue-200/45 transition-colors duration-200 px-3 py-2 rounded-md text-md font-medium hover:underline mr-3"
                  >
                    Log in
                  </Link>
                  <button
                    onClick={handleSignUpClick}
                    className="bg-white border cursor-pointer border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline transition-colors duration-200 h-10 w-[145px] px-4 py-2 rounded-md text-md font-medium"
                  >
                    Create account
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
