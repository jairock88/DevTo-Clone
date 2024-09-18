import NavBar from "@/components/NavBar";

import MainPage from "@/components/mainPage";

export default function MainLayout({ children }) {
  return (
    <main>
      <NavBar />
      {children}

      <MainPage />
    </main>
  );
}
