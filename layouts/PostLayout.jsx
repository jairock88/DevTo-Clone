import NavBar from "@/components/NavBar";
import PostDetail from "@/components/postdetail";

export default function PostLayout({ children }) {
  return (
    <main>
      <NavBar />
      {children}

      <PostDetail />
    </main>
  );
}
