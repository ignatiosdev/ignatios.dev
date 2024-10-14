"use client"; // Make sure this is the first line

import NavbarItems from "./../NavbarItems/NavbarItems";

type Props = {
  currentPage: string; // Correctly define currentPage as a string
  changePage: (path: string, id: string) => void; // Correctly type the function
};

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

function Navbar({ currentPage, changePage }: Props) {
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
