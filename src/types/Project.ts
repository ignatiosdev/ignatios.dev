type Project = {
  id: number;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  imagePath: string;
  imageAlt: {
    en: string;
    es: string;
  };
  url: string;
  skills: string;
};

export default Project;
