import { useEffect, useState } from "react";

// Custom hook to track if a scrollable element has scrolled beyond a threshold
function useHasScrolled(
  ref: React.RefObject<HTMLElement>,
  threshold: number
): boolean {
  const [hasScrolled, setHasScrolled] = useState(false); // Tracks scroll state

  useEffect(() => {
    // Handles scroll events and checks if the threshold is met
    const handleScroll = () => {
      if (ref.current && !hasScrolled) {
        const currentScrollPosition = ref.current.scrollLeft; // Horizontal scroll check
        if (currentScrollPosition >= threshold) {
          setHasScrolled(true); // Mark as scrolled
          ref.current.removeEventListener("scroll", handleScroll); // Remove listener
        }
      }
    };

    // Add scroll event listener
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on unmount
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasScrolled, ref, threshold]); // Dependencies

  return hasScrolled; // Return scroll state
}

export default useHasScrolled; // Export the custom hook
