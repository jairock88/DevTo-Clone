import LoginCard from "./loginCard";
import PostCard from "./postCard";
import Sidebar from "./sideBar";
import SideBarRight from "./sideBarRight";

export default function MainPage() {
  return (
    <main className="bg-neutral-200/50 text-black pt-[68px]">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Columna izquierda */}
        <div className="col-span-1 flex flex-col space-y-4">
          <LoginCard />
          <Sidebar />
        </div>

        {/* Contenedor central */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <PostCard />
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 lg:col-span-1">
          <SideBarRight />
        </div>
      </div>
    </main>
  );
}
