import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPostById } from "@/utils/api";
import Navbar from "@/components/NavBar";
import { Heart, MessageCircle, Star, Bookmark } from "lucide-react";
import Image from "next/image";
export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;

    getPostById(id)
      .then((response) => {
        if (response.success) {
          setPost(response.data.post);
        } else {
          console.log("[getPostById] error: No success");
        }
      })
      .catch((error) => {
        console.log("[getPostById] error:", error);
      });
  }, [id]);

  if (!post) return <p className="text-black">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg text-gray-800 overflow-hidden mt-[64px]">
        {/* Header Image */}
        <div className="relative h-48 bg-blue-200">
          <Image
            width={600}
            height={240}
            src={post.image}
            alt="Post Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Image
              src={post.user.profilePic}
              alt="User avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="font-semibold text-lg">
                {post.user.name || "Unknown User"}{" "}
                {/* Muestra el nombre del usuario */}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.hashtags && post.hashtags.length > 0 ? (
              post.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  #{tag}
                </span>
              ))
            ) : (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                #NoTags
              </span>
            )}
          </div>

          <p className="mb-4">{post.body}</p>

          {/* Interaction buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <button className="flex items-center space-x-1 text-gray-500">
              <Heart size={20} /> <span>8</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <MessageCircle size={20} /> <span>10</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <Star size={20} /> <span>100</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <Bookmark size={20} /> <span>10</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
