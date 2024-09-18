// import {
//   FaHome,
//   FaBookOpen,
//   FaHeadphones,
//   FaVideo,
//   FaTag,
//   FaQuestionCircle,
//   FaShoppingBag,
//   FaHeart,
//   FaTrophy,
//   FaStar,
//   FaInfoCircle,
//   FaEnvelope,
//   FaBook,
//   FaChartBar,
//   FaThumbsUp,
//   FaUser,
//   FaLock,
//   FaBars,
// } from "react-icons/fa";

// const menuItems = [
//   { icon: FaHome, text: "Home" },
//   { icon: FaBookOpen, text: "DEV++" },
//   { icon: FaBookOpen, text: "Reading List" },
//   { icon: FaHeadphones, text: "Podcasts" },
//   { icon: FaVideo, text: "Videos" },
//   { icon: FaTag, text: "Tags" },
//   { icon: FaQuestionCircle, text: "DEV Help" },
//   { icon: FaShoppingBag, text: "Forem Shop" },
//   { icon: FaHeart, text: "Advertise on DEV" },
//   { icon: FaTrophy, text: "DEV Challenges" },
//   { icon: FaStar, text: "DEV Showcase" },
//   { icon: FaInfoCircle, text: "About" },
//   { icon: FaEnvelope, text: "Contact" },
//   { icon: FaBook, text: "Guides" },
//   { icon: FaChartBar, text: "Software comparisons" },
// ];

// const otherItems = [
//   { icon: FaThumbsUp, text: "Code of Conduct" },
//   { icon: FaUser, text: "Privacy Policy" },
//   { icon: FaLock, text: "Terms of use" },
// ];

// export default function Sidebar() {
//   return (
//     <div className="w-64 flex flex-col md:w-auto">
//       <nav className="flex-grow">
//         <ul className="space-y-2 p-4">
//           {menuItems.map((item, index) => (
//             <div className="hover:bg-blue-600/20 rounded-md transition-colors duration-100">
//               <li key={index}>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-700 p-2"
//                 >
//                   <item.icon className="w-5 h-5" />
//                   <span className="text-sm font-medium">{item.text}</span>
//                 </a>
//               </li>
//             </div>
//           ))}
//         </ul>
//       </nav>
//       <div className="p-4">
//         <h3 className="text-sm font-semibold text-gray-500 mb-2">Other</h3>
//         <ul className="space-y-2">
//           {otherItems.map((item, index) => (
//             <div className="hover:bg-blue-600/20 rounded-md transition-colors duration-100">
//               <li key={index}>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-700 rounded-md p-2 "
//                 >
//                   <item.icon className="w-5 h-5" />
//                   <span className="text-sm font-medium">{item.text}</span>
//                 </a>
//               </li>
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import {
  FaHome,
  FaBookOpen,
  FaHeadphones,
  FaVideo,
  FaTag,
  FaQuestionCircle,
  FaShoppingBag,
  FaHeart,
  FaTrophy,
  FaStar,
  FaInfoCircle,
  FaEnvelope,
  FaBook,
  FaChartBar,
  FaThumbsUp,
  FaUser,
  FaLock,
  FaBars,
} from "react-icons/fa";

const menuItems = [
  { icon: FaHome, text: "Home" },
  { icon: FaBookOpen, text: "DEV++" },
  { icon: FaBookOpen, text: "Reading List" },
  { icon: FaHeadphones, text: "Podcasts" },
  { icon: FaVideo, text: "Videos" },
  { icon: FaTag, text: "Tags" },
  { icon: FaQuestionCircle, text: "DEV Help" },
  { icon: FaShoppingBag, text: "Forem Shop" },
  { icon: FaHeart, text: "Advertise on DEV" },
  { icon: FaTrophy, text: "DEV Challenges" },
  { icon: FaStar, text: "DEV Showcase" },
  { icon: FaInfoCircle, text: "About" },
  { icon: FaEnvelope, text: "Contact" },
  { icon: FaBook, text: "Guides" },
  { icon: FaChartBar, text: "Software comparisons" },
];

const otherItems = [
  { icon: FaThumbsUp, text: "Code of Conduct" },
  { icon: FaUser, text: "Privacy Policy" },
  { icon: FaLock, text: "Terms of use" },
];

export default function Sidebar() {
  return (
    <div className="w-64 flex flex-col md:w-auto">
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-blue-600/20 rounded-md transition-colors duration-100"
            >
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 p-2"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Other</h3>
        <ul className="space-y-2">
          {otherItems.map((item, index) => (
            <li
              key={index}
              className="hover:bg-blue-600/20 rounded-md transition-colors duration-100"
            >
              <button
                href="#"
                className="flex items-center space-x-3 text-gray-700 rounded-md p-2"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
