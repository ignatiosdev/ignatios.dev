import { FaExternalLinkAlt } from "react-icons/fa";
<FaExternalLinkAlt className="text-primary"></FaExternalLinkAlt>;

type Props = { url: string };

function LinkIcon({ url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt className="text-primary" />
    </a>
  );
}

export default LinkIcon;
