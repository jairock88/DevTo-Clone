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
// export default function PostDetail() {
//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       {/* Header Image */}
//       <div className="relative h-48 bg-blue-200">
//         <img
//           src="/api/placeholder/800/300"
//           alt="Challenge banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-4 left-4 bg-yellow-300 text-black px-2 py-1 rounded-md font-bold">
//           DEV CHALLENGES
//         </div>
//         <div className="absolute bottom-4 left-4 bg-white text-black px-2 py-1 rounded-md">
//           SEPTEMBER 4-15
//         </div>
//         <div className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded-full">
//           <Award size={24} />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <img
//             src="/api/placeholder/40/40"
//             alt="User avatar"
//             className="w-10 h-10 rounded-full mr-4"
//           />
//           <div>
//             <p className="font-semibold">Jess Lee for The DEV Team</p>
//             <p className="text-gray-500 text-sm">Posted on Sep 17</p>
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold mb-4">
//           Congrats to the Frontend Challenge: Space Edition Winners!
//         </h2>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {["#devchallenge", "#frontendchallenge", "#css", "#javascript"].map(
//             (tag) => (
//               <span
//                 key={tag}
//                 className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
//               >
//                 {tag}
//               </span>
//             )
//           )}
//         </div>

//         <p className="mb-4">
//           Today's the day! We are excited to announce the winners of Frontend
//           Challenge: Space Edition.
//         </p>

//         <p className="mb-4">
//           This was quite a fun challenge for our team to judge - we loved all
//           the CSS space art and interpretations of the Solar System landing
//           page. Everyone here is so creative!
//         </p>

//         <p>
//           Normally we would only choose one winner per prompt, but we couldn't
//           help but award an additional winner to the CSS Art prompt for this
//           challenge. This doesn't happen often, so you should all be really
//           proud of your submissions.
//         </p>

//         {/* Interaction buttons */}
//         <div className="flex items-center mt-6 space-x-4">
//           <button className="flex items-center space-x-1 text-gray-500">
//             <Heart size={20} /> <span>31</span>
//           </button>
//           <button className="flex items-center space-x-1 text-gray-500">
//             <MessageCircle size={20} /> <span>10</span>
//           </button>
//           <button className="flex items-center space-x-1 text-gray-500">
//             <Star size={20} /> <span>11</span>
//           </button>
//           <button className="flex items-center space-x-1 text-gray-500">
//             <Bookmark size={20} /> <span>24</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
