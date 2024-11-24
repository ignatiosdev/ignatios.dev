type Project = {
  id: string;
  title: {
    en: string;
    es: string;
  };
  shortDescription: {
    en: string;
    es: string;
  };
  fullDescription: {
    en: string;
    es: string;
  };
  imageAlt: {
    en: string;
    es: string;
  };
  url?: string;
  skills: string;
  github?:string
};

export default Project;
