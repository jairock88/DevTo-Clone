import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { login } from "@/utils/api";
import { toast } from "sonner";
import { useRouter } from "next/router";
import Button from "@/components/formButtons";
import Terms from "@/components/terms";
import DevCommunityUsers from "@/components/devcommunityform";

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
            <DevCommunityUsers />

            <div id="buttons" className="mt-4 space-y-2">
              <Button />
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
              <Terms />
              <p className="mt-4 text-center text-gray-600 text-md">
                New to DEV Community?{" "}
                <a
                  href="/usersignup"
                  className="text-blue-600 mb-4 hover:underline"
                >
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
