import { text } from "node:stream/consumers";
""

type Props = { text: string,onClick : React.MouseEventHandler<HTMLButtonElement> };

export default function Button({ onClick, text }: Props) {
  return (
    <button onClick={onClick} className="btn btn-block btn-primary text-lg font-bold text-base-100">
      {text}
    </button>
  );
}
