"use client";

import NavbarItems from "./../NavbarItems/NavbarItems";
import { useState } from "react";
type Props = {};

interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { id: "projects", label: "Projects", path: "/" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" },
];

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Navbar({}: Props) {
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
    <div className="container-default">
      <div className="px-6">
        <div className="flex justify-around w-2/3 gap-2">
          {navigationItems.map((item) => (
            <NavbarItems
              key={item.id} // Add a key for the mapped items
              onClick={() => changePage(item.path, item.id)}
              text={item.label}
              active={item.id === currentPage} // Simplified check
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
