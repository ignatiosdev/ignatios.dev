interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

const pagesIndex: NavigationItem[] = [
  { id: "projects", label: "Projects", path: "/" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default pagesIndex;
