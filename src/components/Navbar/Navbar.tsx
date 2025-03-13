"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useGetLocale } from "@/hooks/useGetLocale";
import useHasScrolled from "@/hooks/useHasScrolled";
import useHorizontalOverflow from "@/hooks/useHorizontalOverflow";

import pagesIndex from "@/utils/pagesIndex.ts";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import NavbarItem from "./NavbarItem/NavbarItem";
import SwipeHintAnimation from "./SwipeHintAnimation";

import projectsData from "@/data/projects";

type Props = {};

const Navbar = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useGetLocale();

  // Helper function to normalize path and check if it corresponds to a project
  const getCurrentPageId = (path: string) => {
    const normalizedPath = path.split("/").at(-1) || ""; // Normalize the pathname
    const isProjectPage = projectsData.some(
      (project) => project.id === normalizedPath
    );
    return isProjectPage ? "projects" : normalizedPath || "projects"; // Default to "projects"
  };

  // State to track the current active page ID
  const [currentPageId, setCurrentPageId] = useState<string>("");

  // Ensure correct active state for root path, /es or default project page
  useEffect(() => {
    // If the path is the root "/" or "/es", treat it as "projects"
    if (pathname === "/" || pathname === "" || pathname === "/es") {
      setCurrentPageId("experience");
    } else {
      setCurrentPageId(getCurrentPageId(pathname)); // For other paths, check if it's a project or default
    }
  }, [pathname]);

  // Update currentPageId on custom "pageChange" events
  useEffect(() => {
    const handlePageChange = (event: CustomEvent) => {
      setCurrentPageId(event.detail);
    };
    window.addEventListener("pageChange", handlePageChange as EventListener);
    return () =>
      window.removeEventListener(
        "pageChange",
        handlePageChange as EventListener
      );
  }, []);

  // Navigate to a page and update the active state
  const changePage = (path: string, id: string) => {
    router.push(path);
    setCurrentPageId(id);
  };

  // Refs for navbar overflow and scroll detection
  const navbarRef = useRef<HTMLDivElement>(null);
  const hasOverflow = useHorizontalOverflow(navbarRef);
  const navbarHasBeenScrolled = useHasScrolled(navbarRef, 100);

  return (
    <div className="container-fit flex px-4 py-3 lg:p-6 lg:py-5 lg:pe-0 xl:pe-4 relative">
      <div
        id="navbar"
        ref={navbarRef}
        className="grid grid-cols-2 md:flex overflow-x-scroll scrollbar sm:overflow-auto scrollbar-primary py-4 lg:p-0 w-full text-xl gap-4 lg:gap-0 lg:text-[1.05rem] xl:text-lg xl:gap-1 2xl:text-xl 2xl:gap-2"
      >
        {pagesIndex.map((item) => (
          <NavbarItem
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
    </div>
  );
};

export default Navbar;
