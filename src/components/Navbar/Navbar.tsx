"use client";

import useHorizontalOverflow from "@/hooks/useHorizontalOverflow";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import NavbarItems from "@/components/Navbar/NavbarItems/NavbarItems";
import pagesIndex from "@/utils/pagesIndex.ts";
import SwipeHintAnimation from "./SwipeHintAnimation";

import { setCurrentPageId } from "@/utils/localStorageHelper.ts";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useGetLocale } from "@/hooks/useGetLocale";
import useHasScrolled from "@/hooks/useHasScrolled";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();

  const pathname = usePathname();

  function normalizePathname(pathname: string) {
    let normalizedPathname = pathname.split("/").at(-1);
    return normalizedPathname;
  }

  const locale = useGetLocale();
  // State to track the current page
  const [currentPageId, setCurrentPageIdState] = useState(
    normalizePathname(pathname) == "" || normalizePathname(pathname) == "es"
      ? "projects"
      : normalizePathname(pathname)
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

  const navbarRef = useRef<HTMLDivElement>(null);
  const hasOverflow = useHorizontalOverflow(navbarRef);


  const threshold = 100; // Example threshold
  const navbarHasBeenScrolled = useHasScrolled(navbarRef, threshold);


  return (
    <>
      <div className="container-fit flex px-4 py-3 lg:p-6 lg:pe-0 xl:pe-4 relative">
        {/* Navbar container */}
        <div
          id="navbar"
  
          ref={navbarRef}
          className="flex overflow-x-scroll scrollbar sm:overflow-auto scrollbar-primary py-4 lg:p-0 w-full text-xl gap-4 lg:gap-0 lg:text-base  xl:text-lg  xl:gap-1 2xl:text-xl 2xl:gap-2"
        >
          {/* Path (for swipe animation) */}

          {/* Navbar items */}
          {pagesIndex.map((item) => (
            <NavbarItems
              key={item.id}
              onClick={() => changePage(item.path, item.id)}
              text={item.labels[locale] || item.labels.en}
              active={item.id === currentPageId}
            />
          ))}
        </div>

        {/* Settings Menu */}
        <div className="md:flex items-center hidden xl:px-2 ml-auto md:w-2/12">
          <SettingsMenu />
        </div>

        <SwipeHintAnimation hasBeenScrolled={navbarHasBeenScrolled} navbarIsScrollable={hasOverflow}></SwipeHintAnimation>
      </div>
    </>
  );
}

export default Navbar;
