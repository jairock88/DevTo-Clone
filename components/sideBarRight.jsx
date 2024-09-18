const DiscussionItem = ({ title, comments }) => (
  <div className="p-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
    <div className="flex flex-col space-y-2">
      <h3 className="text-base font-light">{title}</h3>
      <p className="text-xs text-gray-500">{comments} comments</p>
      <hr className="border-gray-200" />
    </div>
  </div>
);

const discussions = [
  { title: "Why I Bash Git (And Why You Should Too)", comments: 40 },
  { title: "Do You Still Use Git in the Terminal?", comments: 272 },
  { title: "Top 7 Featured DEV Posts of the Week", comments: 3 },
  { title: "What was your win this week?", comments: 13 },
  {
    title:
      "Music of the Month — What are you listening to? (September Edition 🍂)",
    comments: 13,
  },
  { title: "Meme Monday", comments: 43 },
  {
    title: "Congrats to the Frontend Challenge: Space Edition Winners!",
    comments: 5,
  },
  { title: "50 for FOSS needs your help", comments: 1 },
];

export default function SideBarRight() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Active discussions</h2>
        <hr className="border-gray-200 my-2" />
      </div>
      <div className="">
        {discussions.map((discussion, index) => (
          <DiscussionItem key={index} {...discussion} />
        ))}
      </div>
    </div>
  );
}
