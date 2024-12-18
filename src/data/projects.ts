import Project from "@/types/Project";

const projectsData: Project[] = [
  {
    id: "abbateuy",
    title: {
      en: "Abbate.uy",
      es: "Abbate.uy",
    },

    shortDescription: {
      en: "Website for the nationally recognized company Abbate Servicios Funebres, where users can consult service dates and locations...",
      es: "Sitio web para la nacionalmente reconocida empresa Abbate Servicios Funebres, donde los usuarios pueden consultar fechas y lugares de los servicios...",
    },
    fullDescription: {
      en: "Website for the nationally recognized company Abbate Servicios Funebres, where users can consult service dates and locations. It features a menu to select the region for the query, as well as a section to view the data.\nThis project was developed following the aesthetic and functional guidelines set by the client, with a focus on simplicity, accessibility, and scalability.",
      es: "Sitio web para la nacionalmente reconocida empresa Abbate Servicios Funebres, donde los usuarios pueden consultar fechas y lugares de los servicios. Cuenta con un menú para seleccionar la región para la consulta, así como una sección para ver los datos.\nEste proyecto fue desarrollado siguiendo las directrices estéticas y de funcionalidad establecidas por el cliente, con un fuerte enfoque en la simplicidad, accesibilidad y escalabilidad.",
    },
    imageAlt: {
      en: "View of the Abbate.uy website showing the main section",
      es: "Captura de pantalla de la página web Abbate.uy donde se ve la sección principal",
    },
    url: "abbate.uy",
    skills:
      "React.js - JavaScript - TailwindCSS - SQL - Node.js - Docker - Debian/Linux",
  },
  {
    id: "MikroTik-SSTP-VPN-Configurator",
    title: {
      en: "MikroTik SSTP VPN Configurator",
      es: "MikroTik SSTP VPN Configurator",
    },

    shortDescription: {
      en: "A command line tool that automates the entire process of setting up an SSTP virtual private network on MikroTik routers. This script handles everything from...",
      es: "Una herramienta de línea de comandos que automatiza el proceso de configuración de una red privada virtual SSTP en routers MikroTik...",
    },
    fullDescription: {
      en: "A command line tool that automates the entire process of setting up an SSTP virtual private network (VPN) on MikroTik routers. This script handles everything from Dynamic DNS (DDNS) and SSL certificate configuration to IP pools, VPN profiles, firewall rules, and user creation.\n Perfect for both home and enterprise environments, it offers a secure, customizable and hassle-free VPN setup solution.",
      es: "Una herramienta de línea de comandos que automatiza el proceso de configuración de una red privada virtual (VPN) SSTP en routers MikroTik. Este script se encarga de todo, desde la configuración de Dynamic DNS (DDNS) y certificados SSL hasta los grupos de direcciones IP, perfiles de VPN, reglas de firewall y creación de usuarios. \nPerfecta tanto para entornos domésticos como empresariales, ofrece una solución de configuración de VPN segura, personalizable y sin complicaciones.",
    },
    imageAlt: {
      en: "Mikrotik-SSTP-VPN-Configurator thumbnail",
      es: "Miniatura de Mikrotik-SSTP-VPN-Configurator",
    },
    url: "",
    skills: "RouterOS Script - Winbox - Network Administration - Automation",
    github: "github.com/ignatiosdev/MikroTik-SSTP-VPN-Configurator",
  },
  {
    id: "Excel-Multiple-File-Opening-Fix",
    title: {
      en: "Excel Multiple File Opening Fix",
      es: "Excel-Multiple-File-Opening-Fix",
    },

    shortDescription: {
      en: "This PowerShell script fixes the common issue of delays when opening multiple Excel files while another instance is already running. By updating specific...",
      es: "Este script de PowerShell soluciona el problema común de los retrasos al abrir múltiples archivos de Excel mientras otra instancia ya está en ejecución...",
    },
    fullDescription: {
      en: "This PowerShell script fixes the common issue of delays when opening multiple Excel files while another instance is already running. \nBy updating specific Windows registry settings related to Excel's Dynamic Data Exchange (DDE) protocol, it streamlines the file-opening process, improving performance and reducing wait times.\n Ideal for users who frequently work with multiple Excel files and want a quick, hassle-free solution for faster file access.",
      es: "Este script de PowerShell soluciona el problema común de los retrasos al abrir múltiples archivos de Excel mientras otra instancia ya está en ejecución. \nAl actualizar configuraciones específicas en el registro de Windows relacionadas con el protocolo de Intercambio de Datos Dinámico (DDE) de Excel, agiliza el proceso de apertura de archivos, mejorando el rendimiento y reduciendo los tiempos de espera.\n Ideal para usuarios que trabajan frecuentemente con múltiples archivos de Excel y desean una solución rápida y sin complicaciones para un acceso más rápido a los archivos.",
    },
    imageAlt: {
      en: "Excel Multiple File Opening Fix thumbnail",
      es: "Miniatura de Excel Multiple File Opening Fix",
    },
    url: "",
    skills: "PowerShell - Windows",
    github: "github.com/ignatiosdev/Excel-Multiple-File-Opening-Fix",
  },
  {
    id: "eMercado-ecommerce-frontend",
    title: {
      en: "eMercado",
      es: "eMercado",
    },

    shortDescription: {
      en: "eMercado is a front-end eCommerce simulation that mimics the user experience of an online store. It showcases products across various categories...",
      es: "eMercado es una simulación front-end de eCommerce que imita la experiencia de usuario de una tienda en línea. Muestra productos en varias...",
    },
    fullDescription: {
      en: "eMercado is a front-end eCommerce simulation that mimics the user experience of an online store.\n It showcases products across various categories, with options to filter by price, category, and item count, and to sort by different criteria. \n The platform includes a simulated user login system, profile management, shopping cart, and a product review system. Product data is fetched via a simple API for a realistic browsing experience.",
      es: "eMercado es una simulación front-end de eCommerce que imita la experiencia de usuario de una tienda en línea. \nMuestra productos en varias categorías, con opciones para filtrar por precio, categoría y cantidad de artículos, y ordenar por diferentes criterios. \nLa plataforma incluye un sistema simulado de inicio de sesión de usuario, gestión de perfiles, carrito de compras y un sistema de reseñas de productos. Los datos de los productos se obtienen a través de una API simple para una experiencia de navegación realista",
    },
    imageAlt: {
      en: '"e-mercado" homepage with menu, logo, and categories like cars, toys, and furniture. Educational e-commerce project.',
      es: 'Página principal de "e-mercado" con menú, logo y categorías como autos juguetes y muebles. Proyecto educativo de e-commerce.',
    },
    url: "ignatiosdev.github.io/eMercado-ecommerce-frontend",
    skills: "HTML - CSS - JavaScript - Bootstrap 5",
    github: "github.com/ignatiosdev/eMercado-ecommerce-frontend",
  },
];

export default projectsData;
