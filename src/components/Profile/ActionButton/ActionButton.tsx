"use client";

import { setCurrentPageId } from "@/utils/localStorageHelper.ts";
import Button from "@/components/Button/Button";
import { useRouter } from "@/i18n/routing";

type Props = { text: string };

function ActionButton({ text }: Props) {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle button click
  function action() {
    setCurrentPageId("contact"); // Set the current page in localStorage
    router.push("/contact"); // Navigate to the contact page
  }

  return <Button onClick={action} text={text} className="w-40 text-lg" />; // Render the button
}

export default ActionButton;
