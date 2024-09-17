import MainLayout from "@/layouts/MainLayout";
import { Main } from "next/document";
import NavBar from "@/components/NavBar";
import HomeLayout from "../components/homepage";

export default function Home() {
  return (
    <NavBar>
      <h1>Home Dev.to</h1>
      <HomeLayout />
    </NavBar>
  );
}
