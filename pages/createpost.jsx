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
                placeholder="(paste your url image: only from www.pexels.com)"
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
                  className="rounded-md bg-blue-700/90 p-2 font-medium text-white hover:bg-blue-700"
                >
                  Publish
                </button>
                <Link
                  href="/createpost"
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
