import { useForm } from "react-hook-form";

import clsx from "clsx";
import { signupUser } from "@/utils/api";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function UserSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    reset,
  } = useForm();

  const password = watch("password");
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await signupUser(data);
      console.log("Sign up successful", response);
      toast.success("Account created successfully!");
      reset();

      if (response.success) {
        router.push("/enter");
      } else {
        toast.error("Failed to create account.");
      }
    } catch (error) {
      console.error("Error during signup", error);
      setError("apiError", {
        message: "An error occurred during signup. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md border border-gray-100 text-gray-600">
      <div className="mx-2">
        <h2 className="text-[1.20rem] font-bold mb-6 mt-4 text-gray-900">
          Create your account
        </h2>
        {/* Asegurarse de pasar handleSubmit en el evento onSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile image
            </label>
            <div className="flex items-center border border-gray-100 p-3 rounded-md">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400/70 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Seleccionar archivo
              </button>
              <span className="text-sm text-gray-500">
                Sin archivos seleccionados
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={clsx(
                "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
                { "border-red-500 bg-red-500/10": errors.username }
              )}
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className={clsx(
                "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
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
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className={clsx(
                "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
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

          <div className="mb-6">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password Confirmation <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className={clsx(
                "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
                { "border-red-500 bg-red-500/10": errors.password_confirmation }
              )}
              placeholder="Password Confirmation"
              {...register("password_confirmation", {
                required: "Password confirmation is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            {errors.password_confirmation && (
              <span className="text-xs text-red-500">
                {errors.password_confirmation.message}
              </span>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="mb-6">
            <div className="flex items-center border-[1.5px] border-gray-300 p-3 rounded-md">
              <input
                type="checkbox"
                id="not_robot"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="not_robot"
                className="ml-2 block text-sm text-gray-700"
              >
                I'm not a robot
              </label>
              <img
                src="/path/to/recaptcha-image.png"
                alt="reCAPTCHA"
                className="ml-auto h-8"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-35 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
