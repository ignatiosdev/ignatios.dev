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

  return (
    <>
   

      <button  onClick={action} className=" text-lg font-semibold before:ease relative h-12 w-40 overflow-hidden border border-primary bg-primary text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40 rounded-lg">
      <span className="relative z-10">{text}</span>
    </button>
    </>
  );
}

export default ActionButton;
