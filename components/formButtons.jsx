import buttons from "@/utils/arraybuttons";

export default function Button() {
  return (
    <div>
      {buttons.map((button, index) => (
        <button
          key={index}
          className="relative flex items-center justify-center w-full px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-100 mb-2"
        >
          {button.icon}
          <span className="text-sm text-black font-medium">{button.label}</span>
        </button>
      ))}
    </div>
  );
}
