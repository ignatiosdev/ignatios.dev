"use client";

import { setCurrentPageId } from "@/utils/localStorageHelper.ts";
import Button from "./../Button/Button";
import { useRouter } from "next/navigation";

type Props = {};

function ActionButton({}: Props) {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle button click
  function action() {
    setCurrentPageId("contact"); // Set the current page in localStorage
    router.push("./contact"); // Navigate to the contact page
  }

  return <Button onClick={action} text="GET IN TOUCH" />; // Render the button
}

export default ActionButton;
