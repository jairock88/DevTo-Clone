const tags = [
  "#webdev",
  "#javascript",
  "#react",
  "#python",
  "#devops",
  "#opensource",
  "#css",
  "#aws",
  "#career",
  "#typescript",
];

export default function TagsList() {
  return (
    <div className="flex flex-col">
      {tags.map((tag, index) => (
        <a
          key={index}
          className="hover:text-blue-600 decoration-slice p-2"
          href=""
        >
          {tag}
        </a>
      ))}
    </div>
  );
}
