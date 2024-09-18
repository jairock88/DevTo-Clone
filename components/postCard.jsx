import { useEffect, useState } from "react";
import { MessageCircle, Bookmark, Heart } from "lucide-react";
import { getAllPosts } from "@/utils/api";
import { useRouter } from "next/router";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const handleClicDetailPost = (postId) => {
    router.push(`/post/${postId}`);
  };

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4"
          >
            {index === 0 && (
              <div className="w-full h-60 relative">
                <img
                  src={post.image}
                  alt="Post Image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Post content */}
            <div className="p-4">
              <div className="flex items-center mb-4">
                {/* imagen y nombre del usuario */}
                <img
                  src={post.user.profilePic}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    {post.user.name || "Unknown User"}{" "}
                    {/* nombre del usuario */}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <h1
                className="text-3xl font-bold mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                onClick={() => handleClicDetailPost(post.id)}
              >
                {post.title}
              </h1>

              {/*<p className="text-gray-700 mb-4">{post.body}</p>*/}

              <div className="flex space-x-2 mb-4">
                {/* hashtags  */}
                {post.hashtags && post.hashtags.length > 0 ? (
                  post.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                      #{tag}
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
