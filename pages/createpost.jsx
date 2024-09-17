// import {
//   X,
//   Bold,
//   Italic,
//   Link,
//   List,
//   ListOrdered,
//   Heading,
//   Quote,
//   Code,
//   Zap,
//   Image,
//   MoreHorizontal,
// } from "lucide-react";

// import NavEditor from "@/components/navEditor";

// export default function CreatePost() {
//   return (
//     <>
//       <NavEditor />
//       <div className="max-w-3xl mx-auto text-gray-800">
//         <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
//           <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded mb-4 hover:bg-gray-100 transition duration-200">
//             Add a cover image
//           </button>

//           <input
//             type="text"
//             placeholder="New post title here..."
//             className="w-full text-4xl font-bold mb-4 outline-none"
//           />

//           <input
//             type="text"
//             placeholder="Add up to 4 tags..."
//             className="w-full mb-4 outline-none text-gray-600"
//           />

//           <div className="flex space-x-2 mb-4">
//             {[
//               Bold,
//               Italic,
//               Link,
//               List,
//               ListOrdered,
//               Heading,
//               Quote,
//               Code,
//               Zap,
//               Image,
//             ].map((Icon, index) => (
//               <button
//                 key={index}
//                 className="p-2 hover:bg-gray-100 rounded transition duration-200"
//               >
//                 <Icon size={20} className="text-gray-600" />
//               </button>
//             ))}
//             <button className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto">
//               <MoreHorizontal size={20} className="text-gray-600" />
//             </button>
//           </div>

//           <textarea
//             placeholder="Write your post content here..."
//             className="w-full h-64 outline-none resize-none"
//           />
//         </div>

//         <div className="flex gap-10 m-4">
//           <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
//             Publish
//           </button>
//           <button className=" text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-200">
//             Save draft
//           </button>
//           <button className="flex items-center text-gray-600 hover:text-gray-800 transition duration-200">
//             <svg
//               className="w-5 h-5 mr-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//               />
//             </svg>
//             Revert new changes
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import {
//   X,
//   Bold,
//   Italic,
//   Link,
//   List,
//   ListOrdered,
//   Heading,
//   Quote,
//   Code,
//   Zap,
//   Image,
//   MoreHorizontal,
// } from "lucide-react";
// import NavEditor from "@/components/navEditor";
// import { createPost } from "@/utils/api"; // Suponiendo que tu función para crear post está exportada desde algún archivo de API

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [hashtags, setHashtags] = useState("");
//   const [body, setBody] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Evita que la página se recargue

//     // Transformar los hashtags en un array
//     const hashtagArray = hashtags
//       .split(",")
//       .map((tag) => tag.trim())
//       .filter((tag) => tag.length > 0);

//     // Crear el objeto del post
//     const postObject = {
//       title,
//       body,
//       hashtags: hashtagArray,
//       image:
//         "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg", // Imagen por defecto
//     };

//     try {
//       // Llamar a la función que hace la solicitud a la API
//       const response = await createPost(postObject);
//       console.log("Post created successfully:", response);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <>
//       <NavEditor />
//       <div className="max-w-3xl mx-auto text-gray-800">
//         <form onSubmit={handleSubmit}>
//           <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
//             <button
//               type="button"
//               className="border border-gray-300 text-gray-600 py-2 px-4 rounded mb-4 hover:bg-gray-100 transition duration-200"
//             >
//               Add a cover image
//             </button>

//             <input
//               type="text"
//               placeholder="New post title here..."
//               className="w-full text-4xl font-bold mb-4 outline-none"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)} // Actualizar el estado del título
//             />

//             <input
//               type="text"
//               placeholder="Add up to 4 tags..."
//               className="w-full mb-4 outline-none text-gray-600"
//               value={hashtags}
//               onChange={(e) => setHashtags(e.target.value)} // Actualizar el estado de los hashtags
//             />

//             <div className="flex space-x-2 mb-4">
//               {[
//                 Bold,
//                 Italic,
//                 Link,
//                 List,
//                 ListOrdered,
//                 Heading,
//                 Quote,
//                 Code,
//                 Zap,
//                 Image,
//               ].map((Icon, index) => (
//                 <button
//                   key={index}
//                   className="p-2 hover:bg-gray-100 rounded transition duration-200"
//                   type="button"
//                 >
//                   <Icon size={20} className="text-gray-600" />
//                 </button>
//               ))}
//               <button
//                 className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto"
//                 type="button"
//               >
//                 <MoreHorizontal size={20} className="text-gray-600" />
//               </button>
//             </div>

//             <textarea
//               placeholder="Write your post content here..."
//               className="w-full h-64 outline-none resize-none"
//               value={body}
//               onChange={(e) => setBody(e.target.value)} // Actualizar el estado del cuerpo del post
//             />
//           </div>

//           <div className="flex gap-10 m-4">
//             <button
//               type="submit" // Cambia el tipo de botón a submit para que el form onSubmit se dispare
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
//             >
//               Publish
//             </button>
//             <button
//               type="button"
//               className="text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-200"
//             >
//               Save draft
//             </button>
//             <button
//               type="button"
//               className="flex items-center text-gray-600 hover:text-gray-800 transition duration-200"
//             >
//               <svg
//                 className="w-5 h-5 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//               Revert new changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useUserLogged } from "@/hooks";
// import { useRouter } from "next/router";
// import {
//   Bold,
//   Italic,
//   Link,
//   List,
//   ListOrdered,
//   Heading,
//   Quote,
//   Code,
//   Zap,
//   Image,
//   MoreHorizontal,
// } from "lucide-react";
// import NavEditor from "@/components/navEditor";
// import { createPost } from "@/utils/api"; // Asumiendo que tu función para crear el post está exportada

// export default function CreatePost() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   async function onSubmit(data) {
//     setIsSubmitting(true);
//     const tags = ["JS", "HTML"];
//     const token = localStorage.getItem("token");
//     try {
//       const response = await createPost(
//         data.title,
//         data.postImage,
//         data.body,
//         tags,
//         token
//       );
//       if (response.success) {
//         router.push("/");
//         setIsSubmitting(false);
//         return;
//       }

//       setError("root.data", { type: "manual", message: response.message });
//       setIsSubmitting(false);
//     } catch (error) {
//       console.log("Error in post registration:", error);
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <>
//       <NavEditor />
//       <div className="max-w-3xl mx-auto text-gray-800">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
//             <button
//               type="button"
//               className="border border-gray-300 text-gray-600 py-2 px-4 rounded mb-4 hover:bg-gray-100 transition duration-200"
//             >
//               Add a cover image
//             </button>

//             {/* Campo para el título */}
//             <input
//               type="text"
//               placeholder="New post title here..."
//               className="w-full text-4xl font-bold mb-4 outline-none"
//               {...register("title", { required: "Title is required" })} // Registramos el input con validación
//             />
//             {errors.title && (
//               <p className="text-red-500 text-sm">{errors.title.message}</p>
//             )}

//             {/* Campo para hashtags */}
//             <input
//               type="text"
//               placeholder="Add up to 4 tags..."
//               className="w-full mb-4 outline-none text-gray-600"
//               {...register("hashtags", {
//                 required: "Please add at least one hashtag",
//               })}
//             />
//             {errors.hashtags && (
//               <p className="text-red-500 text-sm">{errors.hashtags.message}</p>
//             )}

//             <div className="flex space-x-2 mb-4">
//               {[
//                 Bold,
//                 Italic,
//                 Link,
//                 List,
//                 ListOrdered,
//                 Heading,
//                 Quote,
//                 Code,
//                 Zap,
//                 Image,
//               ].map((Icon, index) => (
//                 <button
//                   key={index}
//                   className="p-2 hover:bg-gray-100 rounded transition duration-200"
//                   type="button"
//                 >
//                   <Icon size={20} className="text-gray-600" />
//                 </button>
//               ))}
//               <button
//                 className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto"
//                 type="button"
//               >
//                 <MoreHorizontal size={20} className="text-gray-600" />
//               </button>
//             </div>

//             {/* Campo para el contenido del post */}
//             <textarea
//               placeholder="Write your post content here..."
//               className="w-full h-64 outline-none resize-none"
//               {...register("body", { required: "Body is required" })} // Validación del cuerpo del post
//             />
//             {errors.body && (
//               <p className="text-red-500 text-sm">{errors.body.message}</p>
//             )}
//           </div>

//           <div className="flex gap-10 m-4">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
//             >
//               Publish
//             </button>
//             <button
//               type="button"
//               className="text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-200"
//             >
//               Save draft
//             </button>
//             <button
//               type="button"
//               className="flex items-center text-gray-600 hover:text-gray-800 transition duration-200"
//             >
//               <svg
//                 className="w-5 h-5 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//               Revert new changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading,
  Quote,
  Code,
  Zap,
  Image,
  MoreHorizontal,
} from "lucide-react";
import clsx from "clsx";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createPost } from "@/utils/api";
import NavEditor from "@/components/navEditor";
import { useUserLogged } from "@/hooks";

export default function CreatePost() {
  const user = useUserLogged();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    setIsSubmitting(true);

    const hashtags = data.tags
      .split(",")
      .map((tag) => `#${tag.trim()}`)
      .filter((tag) => tag.length > 1);
    console.log("Hashtags:", hashtags);

    const token = localStorage.getItem("token");
    try {
      const response = await createPost(
        data.title,
        data.postImage,
        data.body,
        hashtags,
        token
      );
      if (response.success) {
        toast.success("New post created!");
        router.push("/");
        setIsSubmitting(false);
        return;
      }

      setError("root.data", { type: "manual", message: response.message });
      setIsSubmitting(false);
    } catch (error) {
      console.log("Error in post registration:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <NavEditor />
      <main className="grid grid-cols-1 bg-gray-100 text-gray-700 py-1 xl:grid-cols-[18rem_1fr_18rem] gap-5">
        <section className="flex flex-col gap-4 p-2 xl:col-start-2 ">
          <article className="rounded-md border border-gray-200 bg-white p-7">
            <form
              id="myForm"
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <input
                type="text"
                className="w-full p-2 outline-none"
                placeholder="Post image (url image)..."
                {...register("postImage")}
              />

              <input
                type="text"
                className={clsx(
                  "w-full p-2 text-4xl font-bold outline-none mt-4 ",
                  {
                    "bg-red-500/10": errors.title,
                  }
                )}
                placeholder="New post title here..."
                {...register("title", {
                  required: {
                    value: true,
                    message: "Post title is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Post title too short",
                  },
                  maxLength: {
                    value: 100,
                    message: "Post title too long",
                  },
                })}
              />

              <div className="flex flex-col gap-3 p-2 md:flex-row mt-4">
                <div className="flex gap-3">
                  <p className="rounded-md bg-gray-100 p-1">
                    <span className="text-gray-400">#Tag</span>
                  </p>
                </div>

                <input
                  type="text"
                  className="outline-none"
                  placeholder="Add up to 4 tags (comma-separated).."
                  {...register("tags", {
                    required: "At least one hashtag is required",
                  })}
                />
              </div>

              <div className="flex space-x-2 mb-4">
                {[
                  Bold,
                  Italic,
                  List,
                  ListOrdered,
                  Heading,
                  Quote,
                  Code,
                  Zap,
                  Image,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="p-2 hover:bg-gray-100 rounded transition duration-200"
                    type="button"
                  >
                    <Icon size={20} className="text-gray-600" />
                  </button>
                ))}
                <button
                  className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto"
                  type="button"
                >
                  <MoreHorizontal size={20} className="text-gray-600" />
                </button>
              </div>

              <textarea
                className={clsx(
                  "w-full border-0 border-none p-2 outline-none",
                  {
                    "bg-red-500/10": errors.body,
                  }
                )}
                rows="10"
                placeholder="Write your post content here..."
                {...register("body", {
                  required: {
                    value: true,
                    message: "Post body is required",
                  },
                  minLength: {
                    value: 15,
                    message: "Body too short",
                  },
                })}
              ></textarea>

              <div className="flex flex-row gap-3 mt-4">
                <button
                  disabled={isSubmitting}
                  className="rounded-md bg-blue-700/90 p-2 font-semibold text-white hover:bg-blue-700"
                >
                  Publish
                </button>
                <Link
                  href="/"
                  className="rounded-md p-2 text-gray-500 hover:bg-blue-700/10 hover:text-blue-700"
                >
                  Save draft
                </Link>
                <Link
                  href="/"
                  className="rounded-md p-2 text-sm text-gray-500 hover:bg-blue-700/10 hover:text-blue-700"
                >
                  Revert changes
                </Link>
              </div>

              {errors.root?.data && (
                <span className="p-2 rounded w-full bg-red-500/15 text-sm text-red-500 mt-4">
                  {errors.root.data.message}
                </span>
              )}
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
