interface NavigationItem {
  id: string;
  labels: { en: string; es: string };
  path: string;
}

const pagesIndex: NavigationItem[] = [
  { id: "projects", labels: { en: "Projects", es: "Proyectos" }, path: "/" },
  {
    id: "experience",
    labels: { en: "Experience", es: "Experiencia" },
    path: "/experience",
  },
  {
    id: "education",
    labels: { en: "Education", es: "Educación" },
    path: "/education",
  },
  {
    id: "contact",
    labels: { en: "Contact", es: "Contacto" },
    path: "/contact",
  },
];

export default pagesIndex;
