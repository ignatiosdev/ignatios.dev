import "./globals.css";
import Profile from "./../components/Profile/Profile";
import Skills from "./../components/Skills/Skills";
import Navbar from "./../components/Navbar/Navbar";
import PageIcon from "@/components/PageIcon/PageIcon";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname(); 

  const [currentPage, setCurrentPage] = useState(
    pathname === "/" ? "projects" : pathname.slice(1) // Normalize pathname
  );

  function changePage(path: string, id: string) {
    router.push(path);
    console.log(`Changed to ${path}`);
    setCurrentPage(id);
  }

  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="bg-primary w-full h-36 absolute -z-10 top-0"></div>
        <div className="flex mt-24 justify-center gap-5">
          <div className="flex flex-col w-1/5 gap-5">
            <Profile />
            <Skills skills={["JavaScript", "Node.js", "Next.js", "Typescript"]} />
          </div>
          <div className="w-6/12 flex flex-col gap-4">
            <Navbar currentPage={currentPage} changePage={changePage} />
            <div className="container-default">
              <PageIcon pageId={currentPage} />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
