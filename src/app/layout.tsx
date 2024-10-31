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
        <div className="bg-primary w-full h-24 lg:h-36 absolute -z-10 top-0"></div>
        <div className="flex flex-col lg:flex-row mt-16 justify-center gap-5  px-6 lg:px-0 z-10">
          <div className="flex flex-col lg:w-1/5 gap-5">
            <Profile />
            <Skills
              skills={["JavaScript", "Node.js", "Next.js", "Typescript"]}
            />
          </div>
          <div className="lg:w-6/12 flex flex-col gap-5 lg:gap-4">
            <Navbar />
            <div className="container-default">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
