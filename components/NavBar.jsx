import { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/signup",
    label: "Create Account",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-white max-w-[full] border-b border-gray-300">
      <div className="mx-6">
        <div className="max-w-[1350px] mx-auto h-[56px] flex items-center justify-between bg-white">
          <div className="flex items-center flex-1">
            <a href="/" className="mr-4">
              <img
                className="h-10"
                src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt=""
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
            <button className="text-gray-700 hover:bg-blue-200/45 px-3 py-2 rounded-md text-md font-medium hover:underline mr-3">
              Log in
            </button>
            <button className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:underline h-10 w-[145px] px-4 py-2 rounded-md text-md font-medium">
              Create account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
