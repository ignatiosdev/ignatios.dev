import React, { useEffect, useRef, useState } from "react";

// Hook to detect horizontal overflow and log status
const useHorizontalOverflow = (ref: React.RefObject<HTMLDivElement>): boolean => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const isOverflowing = ref.current.scrollWidth > ref.current.clientWidth;
        setHasOverflow(isOverflowing);
      }
    };

    // Initial check
    checkOverflow();

    // Event listener for window resize
    window.addEventListener("resize", checkOverflow);

    return () => {
      // Clean up event listener
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref]);

  return hasOverflow;
};

export default useHorizontalOverflow