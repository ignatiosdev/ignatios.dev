"use client";

import SettingsMenu from "../SettingsMenu/SettingsMenu";
import NavbarItems from "@/components/Navbar/NavbarItems/NavbarItems";
import pagesIndex from "@/utils/pagesIndex.ts";

import { setCurrentPageId } from "@/utils/localStorageHelper.ts";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useGetLocale } from "@/hooks/useGetLocale";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();

  const pathname = usePathname();

  const locale = useGetLocale();
  // State to track the current page
  const [currentPageId, setCurrentPageIdState] = useState(
    pathname === "/en" || "/es" ? "projects" : pathname.slice(1) // Normalize pathname
  );

  // Effect to listen for changes in currentPageId global state
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
    // You may need to include locale in the path when navigating
    router.push(path);
    setCurrentPageId(id);
  }

  return (
    <>
    <div className="container-fit flex px-4 py-3 lg:p-6  lg:pe-0">
      <div className="flex justify-between overflow-x-scroll scrollbar scrollbar-primary md:overflow-visible py-4 lg:p-0 lg:w-2/3 text-xl gap-4 lg:gap-0 lg:text-base  xl:text-lg  xl:gap-1 2xl:text-xl 2xl:gap-2">
        {pagesIndex.map((item) => (
          <NavbarItems
            key={item.id}
            onClick={() => changePage(item.path, item.id)}
            text={item.labels[locale] || item.labels.en}
            active={item.id === currentPageId}
          />
        ))}
      </div>
  
      {/* Add ml-auto to push SettingsMenu to the right */}
      <div className="md:flex items-center hidden xl:px-2 ml-auto">
        <SettingsMenu />
      </div>
    </div>
  </>
  
  );
}

export default Navbar;
