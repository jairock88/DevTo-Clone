import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { login } from "@/utils/api";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const response = await login(data.email, data.password);

      if (response.token) {
        localStorage.setItem("token", response.token);
        router.push("/"); // redirect to home
        setIsSubmitting(false);
        return;
      }
      toast.error("Invalid Credentials");
      setError("root.data", { type: "manual", message: "Invalid Credentials" });
      setIsSubmitting(false);
    } catch (error) {
      toast.error("Login error");
      console.error("Login error:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white h-screen py-9 px-4 m-auto text-gray-600">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="text-center">
            <a href="index.html">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo"
                className="h-10 mx-auto"
              />
            </a>
            <h3 className="font-black text-3xl text-black mt-3">
              Join the DEV Community
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              DEV Community is a community of 2,033,290 amazing developers
            </p>
            <div className="mt-4 space-y-2">
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
                  Continue with Apple
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
                  Continue with Facebook
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
                  Continue with Forem
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
                  className="absolute left-4"
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
                    d="m14.936 8.584-.774.208a.232.232 0 0 1-.278-.16l-.317-1.182a.233.233 0 0 1 .16-.278l.79-.211a.232.232 0 0 0 .16-.278l-.2-.744a.223.223 0 0 0-.277-.16l-1.954.54a.233.233 0 0 0-.16.277l.258.963.316 1.181.317 1.182.012.044.88 3.26a.228.228 0 0 0 .177.172.231.231 0 0 0 .261-.196.22.22 0 0 0-.002-.057l-.006-.021-.975-3.597-.137-.539Z"
                    fill="#22E482"
                  ></path>
                </svg>
                <span className="text-sm text-black font-medium">
                  Continue with GitHub
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
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="max-w-full bg-white">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-left text-gray-700 mb-1 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={clsx(
                      "w-full px-3 py-2 h-9 border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
                      { "border-red-500 bg-red-500/10": errors.email }
                    )}
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-left text-sm text-gray-700 ml-1 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={clsx(
                      "w-full px-3 py-2 h-9 border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
                      { "border-red-500 bg-red-500/10": errors.password }
                    )}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <span className="text-xs text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 border border-gray-200 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </button>
              </form>
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
                New to DEV Community?{" "}
                <a href="/usersignup" className="text-blue-600 hover:underline">
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
