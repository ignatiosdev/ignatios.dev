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

  // Function to normalize the pathname
  function normalizePathname(pathname: string) {
    let normalizedPathname = pathname.split("/").at(-1);
    console.log("Normalized pathname:", normalizedPathname); // Debugging log
    return normalizedPathname;
  }

  const locale = useGetLocale();

  // State to track the current page
  const [currentPageId, setCurrentPageIdState] = useState(
    normalizePathname(pathname) == "" || normalizePathname(pathname) == "es"
      ? "projects"
      : normalizePathname(pathname)
  );

  console.log("Initial currentPageId state:", currentPageId); // Debugging log

  // Effect to listen for changes in currentPageId global state
  useEffect(() => {
    const handlePageChange = (event: CustomEvent) => {
      const newValue = event.detail;
      setCurrentPageIdState(newValue);
      console.log("Page changed to:", newValue); // Debugging log
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

  // Effect to log when the pageId state is updated
  useEffect(() => {
    console.log("currentPageId updated to:", currentPageId); // Debugging log
  }, [currentPageId]); // Log whenever `currentPageId` is updated

  // Function to change the page and update localStorage
  function changePage(path: string, id: string) {
    console.log(`Navigating to path: ${path}, with pageId: ${id}`); // Debugging log
    router.push(path);
    setCurrentPageId(id);
  }

  const navbarRef = useRef<HTMLDivElement>(null);
  const hasOverflow = useHorizontalOverflow(navbarRef);

  const threshold = 100; // Example threshold
  const navbarHasBeenScrolled = useHasScrolled(navbarRef, threshold);

  return (
    <>
      <div className="container-fit flex px-4 py-3 lg:p-6 lg:py-5 lg:pe-0 xl:pe-4 relative">
        {/* Navbar container */}
        <div
          id="navbar"
          ref={navbarRef}
          className="flex overflow-x-scroll scrollbar sm:overflow-auto scrollbar-primary py-4 lg:p-0 w-full text-xl gap-4 lg:gap-0 lg:text-[1.05rem] xl:text-lg xl:gap-1 2xl:text-xl 2xl:gap-2"
        >
          {/* Navbar items */}
          {pagesIndex.map((item) => (
            <NavbarItems
              key={item.id}
              onClick={() => changePage(item.path, item.id)}
              text={item.labels[locale] || item.labels.en}
              active={item.id == currentPageId}
            />
          ))}
        </div>

        {/* Settings Menu */}
        <div className="md:flex items-center hidden xl:px-2 ml-auto md:w-2/12">
          <SettingsMenu />
        </div>

        {/* Swipe hint animation */}
        <SwipeHintAnimation
          hasBeenScrolled={navbarHasBeenScrolled}
          navbarIsScrollable={hasOverflow}
        />
      </div>
    </>
  );
}

export default Navbar;
