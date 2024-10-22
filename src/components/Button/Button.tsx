

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function Button({ onClick, text, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        `btn bg-primary font-bold ` + className

      }
    >
      {text}
    </button>
  );
}
