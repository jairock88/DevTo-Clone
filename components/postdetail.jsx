import { useEffect, useState } from "react";
import { MessageCircle, Bookmark, Heart } from "lucide-react";
import { getAllPosts } from "@/utils/api";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PostDetail() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const handleClicDetailPost = (postId) => {
    router.push(`/post/${postId}`);
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts); // Actualiza el estado con los posts obtenidos
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4"
          >
            {/* Header image */}
            <div className="w-full h-60 relative">
              <Image
                src={post.image}
                alt="Post Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 "></div>
            </div>

            {/* Post content */}
            <div className="p-4">
              <div className="flex items-center mb-4">
                {/* Mostrar imagen y nombre del usuario */}
                <Image
                  src={post.user.profilePic || "/path/to/default-avatar.jpg"}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                  width={40}
                  height={40}
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

              <h1
                className="text-3xl font-bold mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={() => handleClicDetailPost(post.id)} // Agregado manejador de clic
              >
                {post.title}
              </h1>

              <p className="text-gray-700 mb-4">{post.body}</p>

              <div className="flex space-x-2 mb-4">
                {/* Renderiza hashtags si existen */}
                {post.hashtags && post.hashtags.length > 0 ? (
                  post.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                    #NoTags
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm mb-1">
                <div className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-md p-2">
                  <Heart size={16} />
                  <span>100 Reactions</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-md p-2">
                  <MessageCircle size={16} />
                  <span>50 Comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>1 min read</span>
                  <div className="hover:bg-blue-600/20 transition-colors duration-200 cursor-pointer rounded-md p-2">
                    <Bookmark size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
