"use client";

import NavbarItems from "@/components/Navbar/NavbarItems/NavbarItems";
import pagesIndex from "@/utils/pagesIndex.ts";
import { setCurrentPageId } from "@/utils/localStorageHelper.ts";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // State to track the current page
  const [currentPageId, setCurrentPageIdState] = useState(
    pathname === "/" ? "projects" : pathname.slice(1) // Normalize pathname
  );

  // Effect to listen for changes currentPageId global state
  useEffect(() => {
    const handlePageChange = (event: CustomEvent) => {
      const newValue = event.detail;
      setCurrentPageIdState(newValue);
      console.log("Page changed to:", newValue);
    };

    // Add event listener for the pageChange event
    window.addEventListener("pageChange", handlePageChange as EventListener);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener(
        "pageChange",
        handlePageChange as EventListener
      );
    };
  }, []);

  // Function to change the page and update localStorage
  function changePage(path: string, id: string) {
    router.push(path);
    setCurrentPageId(id);
  }

  return (
    <div className="container-fit lg:container-default px-4 py-2 ">
      <div className="flex justify-between overflow-x-scroll scrollbar-primary lg:overflow-visible py-4 lg:p-0 lg:gap-2 lg:w-2/3">
        {pagesIndex.map((item) => (
          <NavbarItems
            key={item.id}
            onClick={() => changePage(item.path, item.id)}
            text={item.label}
            active={item.id === currentPageId}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
