import "./globals.css";
import Profile from "./../components/Profile/Profile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="">
        <div className="bg-primary w-full h-36 absolute -z-10 top-0"></div>

        <div className="flex mt-24 justify-center gap-5">
          <div className="container-default w-1/5 ">
            <Profile></Profile>
          </div>
          <div className="container-default w-6/12 h-80">{children}</div>
        </div>
      </body>
    </html>
  );
}
