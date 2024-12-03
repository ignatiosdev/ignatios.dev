"use client"; // Enables client-side rendering

import "./swipeHintAnimation.css";
import { useState, useEffect } from "react";

type Props = {
  navbarIsScrollable: boolean; // Determines if the navbar can scroll
  hasBeenScrolled: boolean;    // Tracks if the page has been scrolled once
};

function SwipeHintAnimation({ navbarIsScrollable, hasBeenScrolled }: Props) {
  const [animationRunning, setAnimationRunning] = useState(false); // Tracks animation state

  // Reset animation when the page is scrolled
  useEffect(() => {
    setAnimationRunning(false);
  }, [hasBeenScrolled]);

  // Manage animation loop based on scroll and navbar properties
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (!hasBeenScrolled && navbarIsScrollable) {
      const animationLoop = () => {
        const timeout = animationRunning ? 7000 : 8000; 
        timeoutId = setTimeout(() => {
          if (!hasBeenScrolled) {
            setAnimationRunning(!animationRunning); // Toggle animation
          }
        }, timeout);
      };

      animationLoop();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId); 
    };
  }, [navbarIsScrollable, hasBeenScrolled, animationRunning]);

  return (
    // Render animation only when `animationRunning` is true
    <div className={"opacity-50 " + (animationRunning ? "" : "hidden")}>
      <div className={"path bg-primary"}></div> 
      <div className={"hand-icon"}></div>      
    </div>
  );
}

export default SwipeHintAnimation; // Export component
