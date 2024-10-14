import "./globals.css";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/Navbar/Navbar";





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 

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
            <Navbar />
            <div className="container-default">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
