import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/router";
export default function NavEditor() {
  const router = useRouter();

  const homeClick = () => {
    router.push("/");
  };

  return (
    <nav className="px-4 py-2 flex items-center justify-between">
      <div className="mx-60">
        <div className="flex items-center space-x-4">
          <img
            onClick={homeClick}
            className="h-10 hover:cursor-pointer"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
          />

          <h1 className="text-xl font-bold text-gray-800">Create Post</h1>
        </div>
      </div>
      <div className="flex mx-10 justify-between items-center gap-1">
        <button className="text-gray-800 font-semibold py-2 px-4 rounded hover:bg-blue-700/10 transition duration-200 hover:text-blue-600">
          Edit
        </button>
        <button className=" text-gray-800 py-2 px-4 rounded hover:bg-blue-700/10 transition duration-200 hover:text-blue-600">
          Preview
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={homeClick}
          className="text-gray-600 hover:text-gray-800 hover:bg-gray-200/50"
        >
          <X size={24} />
        </button>
      </div>
    </nav>
  );
}
