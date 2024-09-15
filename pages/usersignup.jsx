import { useForm } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { signupUser } from "@/utils/api";

// export default function UserSignup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     watch,
//   } = useForm();

//   const [file, setFile] = useState(null);
//   const password = watch("password");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const onSubmit = async (data) => {
//     try {
//       const { name, username, email, password } = data;

//       // Llama a la función signupUser para hacer la solicitud a la API
//       const response = await signupUser({
//         name,
//         userName: username, // Asegúrate de que coincida con tu API
//         email,
//         password,
//       });

//       if (response.success) {
//         console.log("Signup successful", response);
//         // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
//       } else {
//         console.error("Signup failed", response);
//         // Aquí puedes manejar los errores devueltos por la API
//       }
//     } catch (error) {
//       console.error("Error signing up", error);
//       // Maneja los errores de la solicitud, como errores de red
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md border border-gray-100 text-gray-500">
//       <div className="mx-2">
//         <h2 className="text-[1.20rem] font-bold mb-6 mt-4 text-gray-900">
//           Create your account
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Profile image
//             </label>
//             <div className="flex items-center border border-gray-100 p-3 rounded-md">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <button
//                 type="button"
//                 onClick={() =>
//                   document.querySelector("input[type='file']").click()
//                 }
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400/70 focus:outline-none focus:ring-2 focus:ring-gray-500"
//               >
//                 Seleccionar archivo
//               </button>
//               <span className="text-sm text-gray-500">
//                 {file ? file.name : "Sin archivos seleccionados"}
//               </span>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className={clsx(
//                 "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
//                 { "border-red-500 bg-red-500/10": errors.name }
//               )}
//               placeholder="Your Name"
//               {...register("name", {
//                 required: true,
//               })}
//             />
//             {errors.name && (
//               <span className="text-xs text-red-500">Name is required</span>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Username <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className={clsx(
//                 "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
//                 { "border-red-500 bg-red-500/10": errors.username }
//               )}
//               placeholder="Username"
//               {...register("username", {
//                 required: true,
//               })}
//             />
//             {errors.username && (
//               <span className="text-xs text-red-500">Username is required</span>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               className={clsx(
//                 "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
//                 { "border-red-500 bg-red-500/10": errors.email }
//               )}
//               placeholder="email@example.com"
//               {...register("email", {
//                 required: true,
//               })}
//             />
//             {errors.email && (
//               <span className="text-xs text-red-500">Email is required</span>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               className={clsx(
//                 "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
//                 { "border-red-500 bg-red-500/10": errors.password }
//               )}
//               placeholder="Password"
//               {...register("password", {
//                 required: true,
//               })}
//             />
//             {errors.password && (
//               <span className="text-xs text-red-500">Password is required</span>
//             )}
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password Confirmation <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               className={clsx(
//                 "w-full px-3 py-2 border-[1.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 hover:border-[1.5px]",
//                 { "border-red-500 bg-red-500/10": errors.password_confirmation }
//               )}
//               placeholder="Confirm Password"
//               {...register("password_confirmation", {
//                 required: true,
//                 validate: (value) =>
//                   value === password || "Passwords do not match",
//               })}
//             />
//             {errors.password_confirmation && (
//               <span className="text-xs text-red-500">
//                 {errors.password_confirmation.message}
//               </span>
//             )}
//           </div>

//           <div className="mb-6">
//             <div className="flex items-center border-[1.5px] border-gray-300 p-3 rounded-md">
//               <input
//                 type="checkbox"
//                 id="not_robot"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="not_robot"
//                 className="ml-2 block text-sm text-gray-700"
//               >
//                 I'm not a robot
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-35 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Sign up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default function UserSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();

  const password = watch("password");

  // Manejo de envío de formulario
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Llamada a la API para crear usuario
      const response = await signupUser(data);
      console.log("Sign up successful", response);
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
              placeholder="username"
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

          {/* Asegúrate de que el botón sea de tipo submit */}
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
