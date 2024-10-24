"use client"

""

type Props = { text: string; active?: boolean, onClick : React.MouseEventHandler<HTMLButtonElement> };

function NavbarItems({onClick, text, active }: Props) {
    
  return (
    <button
    onClick={onClick}
      className={
        "text-xl font-bold uppercase py-1 px-4 " +
        (active ? "border rounded-xl border-primary" : "")
      }
    >
      {text}
    </button>
  );
}

export default NavbarItems;
