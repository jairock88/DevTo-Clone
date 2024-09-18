import MainLayout from "@/layouts/MainLayout";
import { Main } from "next/document";
import NavBar from "@/components/NavBar";
import HomeLayout from "../components/homepage";
import LoginCard from "@/components/loginCard";

// export default function Home() {
//   return (
//     <NavBar>
//       <div>
//         <LoginCard />
//       </div>
//       <h1>Home Dev.to</h1>
//     </NavBar>
//   );
// }

export default function Home() {
  return <MainLayout></MainLayout>;
}
