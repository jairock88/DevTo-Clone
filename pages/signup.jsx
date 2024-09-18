import { useRouter } from "next/router";
import Button from "@/components/formButtons";
import Terms from "@/components/terms";
import DevCommunityUsers from "@/components/devcommunityform";

export default function signUpForm() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/usersignup");
  };

  const handleSignInClick = () => {
    router.push("/enter");
  };

  return (
    <div className="bg-white h-screen py-9 px-4 m-auto">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="text-center">
            <a href="index.html">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo"
                className="h-10 mx-auto"
              />
            </a>
            <DevCommunityUsers />
            <div id="buttons" className="mt-4 space-y-3 ">
              <Button />
              <button
                className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-100 mb-2 "
                onClick={handleSignUpClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  className="absolute left-4"
                >
                  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z"></path>
                </svg>
                <span class="relative flex h-3 w-3 mx-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-75"></span>
                  <span class="relative inline-flex mx-2 rounded-full h-3 w-3 bg-sky-700"></span>
                </span>
                <span className="text-sm text-black font-medium">
                  Sign up with Email
                </span>
              </button>
            </div>
            <Terms />
            <p className="mt-4 text-center text-gray-600 text-md">
              Do you have an account?{" "}
              <button className="bg-white" onClick={handleSignInClick}>
                <a className="text-blue-600 mb-4 hover:underline">Login</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
