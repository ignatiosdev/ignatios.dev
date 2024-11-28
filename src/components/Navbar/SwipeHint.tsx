"use client";

import "./swipeHintAnimation.css";
import { useState, useEffect } from "react";

type Props = {
  navbarIsScrollable: boolean;
  hasBeenScrolled: boolean;
};

function SwipeHint({ navbarIsScrollable, hasBeenScrolled }: Props) {
  const [animationRunning, setAnimationRunning] = useState(false);

  // Synchronize `hasBeenScrolled` with `localStorage` safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("navbarHasBeenScrolled");
      if (storedValue === "true") {
        hasBeenScrolled = true;
      }
    }
  }, []);

  useEffect(() => {
    if (hasBeenScrolled && typeof window !== "undefined") {
      localStorage.setItem("navbarHasBeenScrolled", "true");
    }
  }, [hasBeenScrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (!hasBeenScrolled && navbarIsScrollable) {
      const animationLoop = () => {
        console.log("Pausing for 8 seconds...");
        timeoutId = setTimeout(() => {
          if (!hasBeenScrolled) {
            console.log("Starting animation...");
            setAnimationRunning(true);

            setTimeout(() => {
              console.log("Stopping animation...");
              setAnimationRunning(false);

              if (!hasBeenScrolled) {
                animationLoop(); // Continue the loop
              }
            }, 9500); // Animation duration
          }
        }, 8000); // Pause duration
      };

      animationLoop();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Cleanup timeout on dependency change
      }
    };
  }, [navbarIsScrollable, hasBeenScrolled]);

  return (
    <>
      <div className={animationRunning ? "" : "hidden"}>
        <div className={"path bg-primary"}></div>
        <div className={"hand-icon"}></div>
      </div>
    </>
  );
}

export default SwipeHint;
