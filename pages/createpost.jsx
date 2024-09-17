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

// export default function createPost() {
//   return (
//     <div className="max-w-3xl mx-auto text-gray-800">
//       <div className="flex items-center space-x-4 mb-6">
//         <div className="bg-black text-white font-bold py-1 px-2 rounded">
//           DEV
//         </div>
//         <h1 className="text-3xl font-bold">Create Post</h1>
//       </div>

//       <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
//         <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded mb-4 hover:bg-gray-100 transition duration-200">
//           Add a cover image
//         </button>

//         <input
//           type="text"
//           placeholder="New post title here..."
//           className="w-full text-4xl font-bold mb-4 outline-none"
//         />

//         <input
//           type="text"
//           placeholder="Add up to 4 tags..."
//           className="w-full mb-4 outline-none text-gray-600"
//         />

//         <div className="flex space-x-2 mb-4">
//           {[
//             Bold,
//             Italic,
//             Link,
//             List,
//             ListOrdered,
//             Heading,
//             Quote,
//             Code,
//             Zap,
//             Image,
//           ].map((Icon, index) => (
//             <button
//               key={index}
//               className="p-2 hover:bg-gray-100 rounded transition duration-200"
//             >
//               <Icon size={20} className="text-gray-600" />
//             </button>
//           ))}
//           <button className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto">
//             <MoreHorizontal size={20} className="text-gray-600" />
//           </button>
//         </div>

//         <textarea
//           placeholder="Write your post content here..."
//           className="w-full h-64 outline-none resize-none"
//         />

//         <div className="flex space-x-4 mt-4">
//           <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
//             Publish
//           </button>
//           <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-200">
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

//         <div className="mt-6 bg-gray-100 p-4 rounded">
//           <h2 className="font-bold mb-2">Writing a Great Post Title</h2>
//           <ul className="list-disc list-inside text-sm text-gray-600">
//             <li>
//               Think of your post title as a super short (but compelling!)
//               description — like an overview of the actual post in one short
//               sentence.
//             </li>
//             <li>
//               Use keywords where appropriate to help ensure people can find your
//               post by search.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  X,
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Heading,
  Quote,
  Code,
  Zap,
  Image,
  MoreHorizontal,
} from "lucide-react";

import NavEditor from "@/components/navEditor";

export default function CreatePost() {
  return (
    <>
      <NavEditor />
      <div className="max-w-3xl mx-auto text-gray-800">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
          <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded mb-4 hover:bg-gray-100 transition duration-200">
            Add a cover image
          </button>

          <input
            type="text"
            placeholder="New post title here..."
            className="w-full text-4xl font-bold mb-4 outline-none"
          />

          <input
            type="text"
            placeholder="Add up to 4 tags..."
            className="w-full mb-4 outline-none text-gray-600"
          />

          <div className="flex space-x-2 mb-4">
            {[
              Bold,
              Italic,
              Link,
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
              >
                <Icon size={20} className="text-gray-600" />
              </button>
            ))}
            <button className="p-2 hover:bg-gray-100 rounded transition duration-200 ml-auto">
              <MoreHorizontal size={20} className="text-gray-600" />
            </button>
          </div>

          <textarea
            placeholder="Write your post content here..."
            className="w-full h-64 outline-none resize-none"
          />
        </div>

        <div className="flex gap-10 m-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
            Publish
          </button>
          <button className=" text-gray-600 py-2 px-4 rounded hover:bg-gray-100 transition duration-200">
            Save draft
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition duration-200">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Revert new changes
          </button>
        </div>
      </div>
    </>
  );
}
