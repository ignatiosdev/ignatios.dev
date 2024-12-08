"use client"; // Enables client-side rendering

import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes
import "./swipeHintAnimation.css";

type Props = {
  navbarIsScrollable: boolean; // Determines if the navbar can scroll
  hasBeenScrolled: boolean;    // Tracks if the page has been scrolled once
};

// Dynamic import of the component to disable SSR (server-side rendering)
const SwipeHintAnimationClientSide = dynamic(() => Promise.resolve(SwipeHintAnimation), {
  ssr: false, // Disable SSR
});

function SwipeHintAnimation({ navbarIsScrollable, hasBeenScrolled }: Props) {
  const [animationRunning, setAnimationRunning] = useState(false); // Tracks animation state
  const [mounted, setMounted] = useState(false); // Ensures client-side rendering

  const { theme } = useTheme(); // Get the current theme from next-themes

  useEffect(() => {
    setMounted(true); // Set mounted to true only on the client
  }, []);

  useEffect(() => {
    setAnimationRunning(false);
  }, [hasBeenScrolled]);

  
  useEffect(() => {
    setAnimationRunning(false);
  }, [navbarIsScrollable]);

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

  if (!mounted) {
    return null; // Don't render anything server-side to avoid hydration issues
  }

  // Set background image based on the theme (light or dark)
  const backgroundImage =
    theme === "dark"
      ? "url('/img/hand_dark.png')" // Dark theme image
      : "url('/img/hand_light.png')"; // Light theme image

  return (
    // Render animation only when `animationRunning` is true
    <div className={"opacity-80 " + (animationRunning ? "" : "hidden")}>
      <div className={"path bg-primary"}></div>
      <div style={{ backgroundImage }} className={"hand-icon"}></div>
    </div>
  );
}

export default SwipeHintAnimationClientSide; // Export client-side version of the component
