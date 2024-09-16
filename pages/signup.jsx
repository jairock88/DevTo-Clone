import { useForm } from "react-hook-form";

import clsx from "clsx";
import { signupUser } from "@/utils/api";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function signUpForm() {
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
            <h3 className="font-black text-3xl text-black mt-4">
              Join the DEV Community
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              DEV Community is a community of 2,033,290 amazing developers
            </p>
            <div className="mt-4 space-y-3 ">
              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md text-gray-700 bg-white hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4"
                >
                  <path
                    d="M12.38 6.615c.901 0 2.033-.61 2.707-1.423.61-.738 1.056-1.768 1.056-2.798 0-.14-.013-.28-.04-.394-1.004.038-2.21.673-2.936 1.525-.572.65-1.094 1.667-1.094 2.71 0 .152.026.304.038.354.064.013.166.026.267.026h.001ZM9.2 22c1.234 0 1.78-.827 3.319-.827 1.564 0 1.906.802 3.28.802 1.348 0 2.25-1.246 3.102-2.467.954-1.4 1.349-2.772 1.373-2.836-.089-.025-2.67-1.08-2.67-4.042 0-2.569 2.034-3.726 2.149-3.815-1.348-1.933-3.395-1.983-3.954-1.983-1.514 0-2.746.915-3.522.915-.84 0-1.946-.865-3.255-.865C6.529 6.882 4 8.942 4 12.832c0 2.416.94 4.972 2.097 6.625C7.088 20.857 7.954 22 9.2 22Z"
                    fill="#000"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Sign up with Apple
                </span>
              </button>
              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md  bg-white hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4"
                >
                  <path
                    d="M18.5 2.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13Z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M16.12 12h-2.636v-1.781c0-.754.368-1.485 1.544-1.485h1.2V6.395s-1.087-.184-2.126-.184c-2.167 0-3.586 1.312-3.586 3.693V12H8.105v2.75h2.41v6.75h2.97v-6.757h2.214L16.115 12h.006Z"
                    fill="#fff"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Sign up with Facebook
                </span>
              </button>

              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md  bg-white hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  class="absolute left-4"
                >
                  <rect
                    x="2.5"
                    y="2.5"
                    width="19"
                    height="19"
                    rx="3"
                    fill="#022830"
                  ></rect>
                  <path
                    d="M12.326 15.382a.229.229 0 0 1 .27.131 1.804 1.804 0 0 0 2.157 1.096c.887-.254 1.467-1.129 1.316-2.042a.217.217 0 0 1 .169-.248l.745-.2a.232.232 0 0 1 .277.16l.004.015a3.084 3.084 0 0 1-2.186 3.526 2.997 2.997 0 0 1-3.631-1.92.223.223 0 0 1 .142-.289l.015-.004.722-.225Z"
                    fill="#E9F0E8"
                  ></path>
                  <path
                    d="M10.673 9.915a.229.229 0 0 1-.27-.131 1.804 1.804 0 0 0-2.157-1.096A1.818 1.818 0 0 0 6.93 10.73a.217.217 0 0 1-.168.248l-.745.2a.232.232 0 0 1-.278-.16l-.004-.015a3.084 3.084 0 0 1 2.187-3.526 2.997 2.997 0 0 1 3.63 1.92.223.223 0 0 1-.142.289l-.014.004-.723.225Z"
                    fill="#4CFCA7"
                  ></path>
                  <path
                    d="m14.936 8.584-.774.208a.232.232 0 0 1-.278-.16l-.317-1.182a.233.233 0 0 1 .16-.278l.79-.211a.232.232 0 0 0 .16-.278l-.2-.744a.223.223 0 0 0-.277-.16l-1.954.54a.233.233 0 0 0-.16.277l.258.963.316 1.181.317 1.182.012.044.88 3.283c.03.117.146.195.263.164l.73-.196a.233.233 0 0 0 .16-.277l-.73-2.729c-.024-.087.019-.161.107-.185l.862-.23a.233.233 0 0 0 .16-.278l-.2-.744c-.039-.146-.168-.221-.285-.19Zm.986-.06a.24.24 0 0 1 .116-.266.871.871 0 0 0 .428-.975.828.828 0 0 0-.839-.62.212.212 0 0 1-.23-.157l-.2-.744c-.03-.117.044-.246.157-.292l.03-.008a2.02 2.02 0 0 1 2.251 1.508 2.058 2.058 0 0 1-1.192 2.446.235.235 0 0 1-.3-.123l-.007-.03-.214-.74Z"
                    fill="#FBC1F5"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Sign up with Forem
                </span>
              </button>

              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  className="absolute left-4"
                >
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                    fill="#171717"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Sign up with GitHub
                </span>
              </button>

              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-100 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4"
                >
                  <path
                    d="M18.09 18.75c2.115-1.973 3.052-5.25 2.49-8.393h-8.392v3.473h4.777a3.945 3.945 0 0 1-1.777 2.67l2.902 2.25Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M4.215 15.982A9 9 0 0 0 18.09 18.75l-2.902-2.25a5.37 5.37 0 0 1-8.018-2.813l-2.955 2.296Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M7.17 13.687c-.375-1.17-.375-2.25 0-3.42L4.215 7.965a9.06 9.06 0 0 0 0 8.025l2.955-2.303Z"
                    fill="#FBBC02"
                  ></path>
                  <path
                    d="M7.17 10.267c1.035-3.24 5.438-5.115 8.393-2.347l2.58-2.528A8.85 8.85 0 0 0 4.215 7.965l2.955 2.302Z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Sign up with Google
                </span>
              </button>
              <button className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-100 mb-2">
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

                <span className="text-sm text-black font-medium">
                  Sign up with Email
                </span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs italic text-gray-600">
              By signing in, you are agreeing to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                privacy policy
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                code of conduct
              </a>
              .
            </p>
            <p className="mt-4 text-center text-gray-600 text-md">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
