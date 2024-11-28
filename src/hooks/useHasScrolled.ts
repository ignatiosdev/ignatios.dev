import { useEffect, useState } from "react";

function useHasScrolled(
  ref: React.RefObject<HTMLElement>,
  threshold: number
): boolean  {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const currentScrollPosition = ref.current.scrollLeft; // Use `scrollTop` for vertical scroll
        if (currentScrollPosition >= threshold) {
          setHasScrolled(true);
          console.log("user has scrolled beyond threshold");
        }
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, threshold]);

  return hasScrolled;
}

export default useHasScrolled;
