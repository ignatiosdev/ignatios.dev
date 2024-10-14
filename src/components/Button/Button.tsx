import { text } from "node:stream/consumers";
import React from "react";

type Props = { text: string };

export default function Button({ text }: Props) {
  return (
    <button className="btn btn-block btn-primary text-lg font-bold">
      {text}
    </button>
  );
}
